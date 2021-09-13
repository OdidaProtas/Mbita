import React, { Component } from "react";
import { Text, View, FlatList, Image, Pressable } from "react-native";
import { products } from "../../data/dataArrays";
import { Caption, Paragraph } from "react-native-paper";
import { getCategoryById, getShopByID } from "../../data/MockDataAPI";
import { StateContext } from "../../data/state/StateContext";
import { AddToBasket } from "../CategoryDetails/CategoryShopScreen";

export default class PopularProducts extends Component {
  renderItem = ({ item }) => {
    const { title, photo_url, shop, customs } = item;

    const {
      price: { amount, prefix },
      unit: { quantity, text },
    } = customs[0]?.options[0];

    const { themeColor, shopCategory } = getShopByID(shop);
    const { name } = getCategoryById(shopCategory);
    const shopName = getShopByID(shop).name;

    const handlePress = () => {
      const category = name;
      const themeColorName = themeColor;
      this.props.navigation.navigate("Details", {
        item,
        themeColorName,
        category,
        shopName,
      });
    };
    return (
      <Pressable
        onPress={handlePress}
        style={{
          marginBottom: 9,
          marginRight: 2,
        }}
      >
        <Image
          style={{
            height: 90,
            width: 180,
            borderTopLeftRadius: 2,
            borderTopRightRadius: 2,
          }}
          source={{ uri: photo_url }}
        />
        <View
          style={{
            backgroundColor: themeColor,
            padding: 6,
            borderBottomEndRadius: 2,
            borderBottomStartRadius: 2,
          }}
        >
          <Caption>{name}</Caption>
          <Paragraph>{title}</Paragraph>
          <Caption>{shopName}</Caption>
          <Paragraph>
            {prefix}. {amount}{" "}
          </Paragraph>
          <Caption style={{ position: "absolute", right: 2, top: 9 }}>
            {quantity} {text}
          </Caption>
          <View style={{ position: "absolute", bottom: 0, right: -9 }}>
            <AddToBasket item={item} />
          </View>
        </View>
      </Pressable>
    );
  };
  static contextType = StateContext;
  render() {
    return (
      <View style={{ paddingBottom: 18 }}>
        <Paragraph style={{ marginTop: 9, marginBottom: 18 }}>
          {this.props?.title}
        </Paragraph>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={this.renderItem}
          data={products.slice(0, 4)}
        />
      </View>
    );
  }
}
