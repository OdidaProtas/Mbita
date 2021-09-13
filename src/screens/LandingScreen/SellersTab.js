import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { Caption, IconButton, Paragraph } from "react-native-paper";
import { shops } from "../../data/shopArrays";
import ImageLayouts from "react-native-image-layouts";
import TopShops from "../../screens/PromotionWidgets/TopShops";
import { getCategoryById } from "../../data/MockDataAPI";

const layoutPattern = [2, 2, 3, 2, 1];

export default class SellersTab extends Component {
  renderItem = (item) => {
    const {
      id,
      name,
      photo_url,
      themeColor,
      shopCategory,
      web_url,
      isExternal,
    } = item;
    const category = getCategoryById(shopCategory);
    return (
      <Pressable
        onPress={() => {
          if (isExternal) {
            this.props.route.navigation.navigate("External", {
              web_url,
              name,
              themeColor,
            });
          } else {
            this.props.route.navigation.navigate("Home", { id, name });
          }
        }}
      >
        <View style={styles.shopItem}>
          <Image
            style={{
              aspectRatio: 3 / 2,
              borderTopRightRadius: 2,
              borderTopLeftRadius: 2,
            }}
            source={{ uri: photo_url }}
          />
          <View
            style={{
              backgroundColor: themeColor,
              paddingHorizontal: 9,
              paddingVertical: 9,
              alignItems: "center",
              borderBottomEndRadius: 2,
              borderBottomStartRadius: 2,
            }}
          >
            <Paragraph>{name}</Paragraph>
            <Caption>{category.name}</Caption>
          </View>
        </View>
      </Pressable>
    );
  };

  render() {
    return (
      <View>
        <View style={styles.title}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ paddingTop: 15 }}>
              <Caption>Discover {shops.length} Shops</Caption>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <IconButton
                size={20}
                onPress={() => this.props.route.navigation.navigate("Search")}
                icon="magnify"
              />
            </View>
          </View>
        </View>
        <ScrollView style={styles.productContainer}>
          <TopShops navigation={this.props.route.navigation} />
          {/* <ProductsTab /> */}
          <Paragraph style={{ marginVertical: 9 }}>All Shops</Paragraph>
          <ImageLayouts
            data={shops}
            numberOfColumns={2}
            patterns={layoutPattern}
            renderItem={this.renderItem}
            dividerPadding={1}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 9,
  },
  productContainer: {
    padding: 6,
  },
  shopItem: {},
});
