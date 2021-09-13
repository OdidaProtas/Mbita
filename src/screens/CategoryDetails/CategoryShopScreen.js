import React, { Component, useContext } from "react";
import {
  StatusBar,
  View,
  Image,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";
import {
  Title,
  IconButton,
  Caption,
  Chip,
  Text,
  Paragraph,
} from "react-native-paper";
import { products } from "../../data/dataArrays";
import ImageLayouts from "react-native-image-layouts";
import numberWithCommas from "../../data/formatNumber";
import BasketBtn from "../Basket/BasketBtn";
import { StateContext } from "../../data/state/StateContext";
import { getShopByID } from "../../data/MockDataAPI";
import CustomOrder from "../OrderCustomization/CustomOrder";

let itemName, themeColorName, navigation, shop;

export const AddToBasket = ({ item, navigation }) => {
  const { id, shop } = item;
  const { themeColor } = getShopByID(shop);
  const [{ basket }, dispatch] = useContext(StateContext);
  return (
    <>
      <View>
        <CustomOrder id={id} navigation={navigation} item={item} theme={themeColor} />
      </View>
     
    </>
  );
};

const RenderItem = (props) => {
  const item = props;
  const {
    unit: { text, quantity },
  } = item;

  function handleItemPress() {
    const category = itemName;
    const shopName = shop;
    navigation.navigate("Details", {
      item,
      themeColorName,
      category,
      shopName,
    });
  }

  return (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.0)"
      onPress={() => handleItemPress()}
    >
      <View style={{ backgroundColor: "#fff", borderRadius: 2 }}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{
              height: 144,
              width: "100%",
              borderRadius: 2,
            }}
            source={{ uri: item.photo_url }}
          />
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 18,
            borderBottomEndRadius: 2,
            borderBottomStartRadius: 2,
            paddingHorizontal: 9,
            paddingBottom: 6,
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
              <Text>
                {item.title} <Caption></Caption>
              </Text>
              <Caption>{itemName}</Caption>
              <Text>
                {item.price.prefix}. {numberWithCommas(item.price.amount)}
              </Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Caption style={{ marginRight: 12 }}>
                {quantity} {text}{" "}
              </Caption>
              <AddToBasket item={item} />
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default class CategoryShopScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: itemName,
    header: () => (
      <SafeAreaView
        style={{
          paddingBottom: 9,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton icon="menu" onPress={() => navigation.openDrawer()} />
          <BasketBtn navigation={navigation} />
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingRight: 25,
          }}
        >
          <View style={{ alignItems: "flex-start", paddingLeft: 25 }}>
            <Title style={{ fontSize: 30, marginTop: 18 }}>
              {navigation.getParam("item").name}
            </Title>
            <Caption>{navigation.getParam("shop").name}</Caption>
          </View>
          <View style={{ marginTop: 18 }}>
            {/* <Chip>Similar Products</Chip> */}
          </View>
        </View>
      </SafeAreaView>
    ),
  });
  constructor(props) {
    super(props);
    this.item = this.props.navigation.getParam("item");
    this.shop = this.props.navigation.getParam("shop");
    shop = this.shop.name;
    this.themeColor = this.props.navigation.getParam("themeColor");
    itemName = this.item.name;
    this.products = products.filter(
      (product) =>
        product.shop === parseInt(this.shop.id) &&
        product.categoryId === parseInt(this.item.id)
    );
    themeColorName = this.themeColor;
    navigation = this.props.navigation;
  }

  layoutPattern = [1, 2, 2, 1, 3];

  static contextType = StateContext;
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.themeColor,
          paddingHorizontal: 3,
        }}
      >
        <ImageLayouts
          {...this.context}
          data={this.products}
          numberOfColumns={2}
          patterns={this.layoutPattern}
          renderItem={(props) => <RenderItem {...props} />}
          dividerPadding={1}
        />
      </View>
    );
  }
}
