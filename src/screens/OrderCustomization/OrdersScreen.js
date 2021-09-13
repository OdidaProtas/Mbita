import React, { Component } from "react";
import { View, StatusBar, Pressable, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {
  IconButton,
  Paragraph,
  Title,
  List,
  Divider,
  Caption,
  Text,
  Button,
} from "react-native-paper";
import {
  getCategoryById,
  getProductById,
  getShopByID,
} from "../../data/MockDataAPI";
import * as Haptics from "expo-haptics";
import { Header } from "../LandingScreen/AllProductsScreen";

const orders = [
  {
    id: 1,
    number: "12345ABC",
    date: new Date(),
    items: [
      { id: 7, _quantity: 1 },
      { id: 1, _quantity: 6 },
    ],
  },
];

export default class OrdersScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: () => <Header title="Orders" navigation={navigation} />,
  });
  renderOrderItem = ({ item }) => {
    const { id, _quantity } = item;
    const {
      title,
      photo_url,
      shop,
      categoryID,
      unit: { text, quantity },
      price: { prefix, amount },
    } = getProductById(id);
    const { name, themeColor, shopCategory } = getShopByID(shop);
    const categoryName = getCategoryById(shopCategory)?.name;

    return (
      <Pressable
        onPress={() => {
          const category = categoryName;
          const themeColorName = themeColor;
          const shopName = name;
          const item = getProductById(id);
          this.props.navigation.navigate("Details", {
            item,
            themeColorName,
            category,
            shopName,
          });
        }}
        style={{ width: "50%", paddingVertical: 9 }}
      >
        <Image style={{ aspectRatio: 3 / 2 }} source={{ uri: photo_url }} />
        <View
          style={{
            backgroundColor: themeColor,
            paddingHorizontal: 12,
            paddingTop: 9,
          }}
        >
          <Paragraph>
            <Text>{title}</Text>
            <Caption> {categoryName}</Caption>
          </Paragraph>
          <Caption>{name}</Caption>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              paddingBottom: 12,
            }}
          >
            <Paragraph>
              {_quantity} ({quantity * _quantity} {text})
            </Paragraph>
            <Paragraph>
              {prefix}. {_quantity * amount}
            </Paragraph>
          </View>
        </View>
      </Pressable>
    );
  };

  renderItem = ({ item }) => {
    const { number, date, items } = item;
    return (
      <Pressable>
        <View>
          <View style={{ margin: 7 }}>
            <Paragraph>4 /15 / 2020</Paragraph>
          </View>
          <List.Accordion title={`Order  ${number}`} id="1">
            <List.Item title={`${items.length} item(s) - Ksh. 1500`} />
            <View padding={3}>
              <FlatList
                data={items}
                numColumns={2}
                keyExtractor={(item) => items.indexOf(item)}
                renderItem={this.renderOrderItem}
              />
            </View>
            <View style={{ paddingHorizontal: 9, paddingBottom: 18 }}>
              <Paragraph>Delivery</Paragraph>
              <Paragraph>
                <Caption>Fulfilled </Caption> {new Date().getDay()}/
                {new Date().getMonth()}/{new Date().getFullYear()} -{" "}
                {new Date().getHours()}:{new Date().getMinutes()}
              </Paragraph>
              <Text>
                <Caption>Payment </Caption> Mpesa
              </Text>
              <Text style={{ marginTop: 3 }}>
                <Caption>Receipt {"  "}</Caption> ABBJHKJJOLK8
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <Button
                onPress={() => {
                  Haptics.impactAsync("medium");
                }}
                style={{ marginTop: 9, elevation: 0 }}
              >
                Delete
              </Button>
              <Button style={{ marginTop: 9, elevation: 0 }}>
                Return Items
              </Button>
              <Button style={{ marginTop: 9, elevation: 0 }}>Reorder</Button>
            </View>
            <Divider />
          </List.Accordion>
        </View>
      </Pressable>
    );
  };

  render() {
    return (
      <View style={{ padding: 3, paddingTop: 13 }}>
        <View>
          <FlatList
            keyExtractor={(item) => item.id}
            renderItem={this.renderItem}
            data={orders}
          />
        </View>
      </View>
    );
  }
}
