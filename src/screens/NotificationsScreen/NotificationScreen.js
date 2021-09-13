import React, { Component } from "react";
import { View, StatusBar, Pressable, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {
  IconButton,
  Paragraph,
  Title,
  List,
  Badge,
  Caption,
  Text,
  Divider,
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
    header: () => <Header title="Alerts" navigation={navigation} />,
  });

  renderOrderItem = ({ item }) => {
    const { id, _quantity } = item;
    const {
      title,
      photo_url,
      shop,
      categoryId,
      unit: { text, quantity },
      price: { prefix, amount },
    } = getProductById(id);
    const { name, themeColor } = getShopByID(shop);
    const categoryName = getCategoryById(categoryId).name;

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
            paddingHorizontal: 9,
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
    const name = "Artik";
    return (
      <Pressable
        onPress={() => this.props.navigation.navigate("Chat", { name })}
      >
        <List.Item title="Artik" description="Help and Support" />
        <Divider />
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
