import React, { Component } from "react";
import { View, Image, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { shops } from "../../data/shopArrays";
import { Paragraph, Caption } from "react-native-paper";
import { products } from "../../data/dataArrays";
import { getCategoryById } from "../../data/MockDataAPI";

export default class TopShops extends Component {
  renderMiniItem = ({ item: { photo_url } }) => {
    return (
      <View>
        <Image
          style={{ height: 66, width: 72, borderRadius: 2 }}
          source={{ uri: photo_url }}
        />
      </View>
    );
  };

  renderItem = ({ item }) => {
    const {
      id,
      themeColor,
      name,
      shopCategory,
      featured,
      photo_url,
      web_url,
      isExternal,
    } = item;
    const category = getCategoryById(shopCategory);

    const featuredProducts = products.filter((product) =>
      featured.includes(product.id)
    );

    return (
      <Pressable
        onPress={() => {
          if (isExternal) {
            this.props.navigation.navigate("External", {
              web_url,
              name,
              themeColor,
            });
          } else {
            this.props.navigation.navigate("Home", { id, name });
          }
        }}
        style={{
          backgroundColor: themeColor,
          padding: 9,
          borderRadius: 2,
          marginRight: 2,
        }}
      >
        <View style={{ marginTop: 1 }}>
          <FlatList
            scrollEnabled={false}
            horizontal={true}
            renderItem={this.renderMiniItem}
            data={featuredProducts.slice(0, 3)}
          />
          <Image
            style={{ height: 50, width: "100%", marginBottom: 6 }}
            source={{ uri: photo_url }}
          />
          <Paragraph>{name}</Paragraph>
          <Caption>{category.name}</Caption>
        </View>
      </Pressable>
    );
  };
  render() {
    return (
      <View style={{ marginBottom: 9 }}>
        <Paragraph style={{ marginBottom: 9 }}> Top Sellers </Paragraph>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={this.renderItem}
          data={shops.slice(1, 3)}
        />
      </View>
    );
  }
}
