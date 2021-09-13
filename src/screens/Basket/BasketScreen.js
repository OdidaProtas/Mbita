import React, { useContext } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  StatusBar,
  Platform,
} from "react-native";
import styles from "./styles";
import { products } from "../../data/dataArrays";
import { getShopByID } from "../../data/MockDataAPI";
import * as Haptics from "expo-haptics";

import {
  Paragraph,
  Title,
  Button,
  Caption,
  IconButton,
} from "react-native-paper";
import numberWithCommas from "../../data/formatNumber";
import { getBasketTotal, StateContext } from "../../data/state/StateContext";
import { AddToBasket } from "../CategoryDetails/CategoryShopScreen";
import PopularProducts from "../PromotionWidgets/PopularProducts";

const BasketTotal = () => {
  const [{ basket }] = useContext(StateContext);
  return (
    <View>
      <Text style={{ marginTop: 9 }}>
        Amount: Ksh. {numberWithCommas(getBasketTotal(basket, products))}
      </Text>
    </View>
  );
};

const CheckoutBtn = ({ navigation }) => {
  const [{ basket }] = useContext(StateContext);
  return (
    <Button
      disabled={Object.keys(basket).length < 1}
      onPress={() => navigation.navigate("Checkout")}
      sytyle={{ elevation: 0 }}
      mode="contained"
    >
      Checkout
    </Button>
  );
};

export default class BasketScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Basket",
      header: () => (
        <View style={{ paddingTop: StatusBar.currentHeight }}>
          <IconButton
            size={30}
            icon="arrow-left-circle"
            onPress={() => navigation.goBack()}
          />
          <View style={{ padding: 6 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Paragraph>Artik</Paragraph>
                <Title>Your Shopping Bag</Title>
                <BasketTotal />
              </View>
              <View style={{ paddingTop: 36 }}>
                <CheckoutBtn navigation={navigation} />
              </View>
            </View>
          </View>
        </View>
      ),
    };
  };

  constructor(props) {
    super(props);
  }

  onPressCategory = (item) => {
    const title = item.name;
    // const category = item;
    // this.props.navigation.navigate("RecipesList", { category, title });
  };

  renderCategory = ({ item }) => {
    const [, dispatch] = this.context;
    const { title, shop, customs, id } = item;
    const { themeColor } = getShopByID(shop);

    const {
    price: { amount, prefix },
      unit: { quantity, text },
    } = customs[0]?.options[0];

    // const { name } = getCategoryById(categoryId);
    const shopName = getShopByID(shop).name;

    const [{ basket }] = this.context;

    const handlePress = () => {
      const category = title;
      const themeColorName = themeColor;
      this.props.navigation.navigate("Details", {
        item,
        themeColorName,
        category,
        shopName,
      });
    };

    return (
      <TouchableHighlight
        style={{ width: "50%", marginBottom: 1 }}
        underlayColor="rgba(73,182,77,0.0)"
        onPress={() => handlePress(item)}
      >
        <View style={styles.categoriesItemContainer}>
          <Image
            style={styles.categoriesPhoto}
            source={{ uri: item.photo_url }}
          />
          <View
            style={{
              backgroundColor: themeColor,
              paddingLeft: 18,
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <View>
                <Text style={{ marginTop: 9 }}>
                  {title} <Caption></Caption>
                </Text>
                <Text style={{ marginTop: 3 }}>
                  {basket[id].quantity} x {quantity} {text}(s)
                </Text>
                <Caption>{shopName}</Caption>
                <Paragraph style={{ marginBottom: 9 }}>
                  {prefix}. {numberWithCommas(amount * basket[id].quantity)}
                </Paragraph>
              </View>
              <View>
                <IconButton
                  size={22}
                  onPress={() => {
                    dispatch({ type: "REMOVE_FROM_BASKET", payload: id });
                    Haptics.impactAsync("medium");
                  }}
                  icon="delete"
                />
              </View>
            </View>
            <View style={{ position: "absolute", bottom: -9, right: -6 }}>
              <AddToBasket item={item} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  static contextType = StateContext;

  render() {
    const [{ basket }] = this.context;
    const renderItems = products.filter((product) =>
      Object.keys(basket).includes(product.id.toString())
    );
    return (
      <View>
        {Object.keys(basket)?.length > 0 ? (
          <View style={{ marginTop: 6, marginBottom: 9 }}>
            <Caption style={{ margin: 3, marginBottom: 12 }}>
              You have {Object.keys(basket)?.length} Items
            </Caption>
            <FlatList
              data={renderItems}
              numColumns={2}
              contentContainerStyle={{
                padding: 3,
              }}
              renderItem={this.renderCategory}
              keyExtractor={(item) => `${item.id}`}
            />
            <View style={{ marginTop: 50, padding: 3 }}>
              <PopularProducts title="You may also be interested in" />
            </View>
          </View>
        ) : (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              dispay: "flex",
              marginTop: 99,
              padding: 9,
            }}
          >
            <Paragraph style={{ marginBottom: 69 }}>
              Your basket is empty
            </Paragraph>
            <PopularProducts title="You may be interested in" />
          </View>
        )}
      </View>
    );
  }
}
