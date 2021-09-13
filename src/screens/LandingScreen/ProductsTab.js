import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { Button, Caption, IconButton, Paragraph } from "react-native-paper";
import ImageLayouts from "react-native-image-layouts";
import { products } from "../../data/dataArrays";
import { getCategoryById, getShopByID } from "../../data/MockDataAPI";
import ActionSheet from "react-native-actionsheet";

import numberWithCommas from "../../data/formatNumber";
import ArtikPopup from "./ArtikPopup";
import PopularProducts from "../PromotionWidgets/PopularProducts";
import { StateContext } from "../../data/state/StateContext";
import { AddToBasket } from "../CategoryDetails/CategoryShopScreen";

const layoutPattern = [1, 2, 2, 1, 2, 1];

const ProductMenu = ({ photo_url }) => {
  return (
    <Image
      style={{
        height: 160,
        width: "100%",
        borderTopRightRadius: 2,
        borderTopLeftRadius: 2,
      }}
      source={{ uri: photo_url }}
    />
  );
};

function compare(a, b) {
  if (
    a.customs[0]?.options[0].price.amount <
    b.customs[0]?.options[0].price.amount
  ) {
    return -1;
  }
  if (
    a.customs[0]?.options[0].price.amount >
    b.customs[0]?.options[0].price.amount
  ) {
    return 1;
  }
  return 0;
}

function compareb(a, b) {
  if (a.price.amount < b.price.amount) {
    return 1;
  }
  if (a.price.amount > b.price.amount) {
    return -1;
  }
  return 0;
}

const options = [
  <Button icon="sort-ascending" uppercase={false}>
    Lowest to highest
  </Button>,
  <Button icon="sort-descending" uppercase={false}>
    Highest to lowest
  </Button>,
  "Cancel",
];

class FilterButton extends React.Component {
  showActionSheet = () => {
    this.ActionSheet.show();
  };
  render() {
    return (
      <View>
        <IconButton size={20} icon="sort" onPress={this.showActionSheet} />
        <ActionSheet
          ref={(o) => (this.ActionSheet = o)}
          title={
            <Text style={{ color: "#000", fontSize: 18 }}>Sort by price</Text>
          }
          options={options}
          cancelButtonIndex={options.length - 1}
          destructiveButtonIndex={options.length - 1}
          onPress={(index) => {
            if (index === 0) {
              products.sort(compare);
            } else {
              products.sort(compareb);
            }
          }}
        />
      </View>
    );
  }
}

export default class ProductsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.shop = this.props.route.shop;
  }

  toggleModal = () => this.setState({ modalVisible: !this.state.modalVisible });

  renderItem = (item) => {
    const { photo_url, title, customs, shop } = item;

    const {
      price: { amount, prefix },
      unit: { quantity, text },
    } = customs[0]?.options[0];

    const { themeColor, name, shopCategory } = getShopByID(shop);
    const category = getCategoryById(shopCategory);

    const handlePress = () => {
      const category = title;
      const shopName = name;
      const themeColorName = themeColor;
      this.props.route.navigation.navigate("Details", {
        item,
        themeColorName,
        category,
        shopName,
      });
    };

    return (
      <Pressable onLongPress={this.toggleModal} onPress={handlePress}>
        <View style={styles.shopItem}>
          <ArtikPopup
            item={item}
            toggle={this.toggleModal}
            open={this.state.modalVisible}
          />
          <ProductMenu photo_url={photo_url} />
          <View
            style={{
              backgroundColor: themeColor,
              // paddingHorizontal: 9,
              paddingVertical: 12,
            }}
          >
            <View style={{ paddingLeft: 9 }}>
              <Caption>{category.name}</Caption>
              <Paragraph>{title}</Paragraph>
              <Caption>{name}</Caption>
              <Text style={{ marginTop: 3 }}>
                {prefix}. {numberWithCommas(amount)}
              </Text>
            </View>
            <Caption style={{ position: "absolute", right: 9, top: 2 }}>
              {quantity} {text}
            </Caption>
            <View style={{ position: "absolute", bottom: 0, right: 3 }}>
              <AddToBasket item={item} />
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  processProducts = () => {
    switch (this.shop) {
      case "*":
        return products;
      default:
        try {
          if (this.shop?.startsWith("category")) {
            const categoryID = this.shop.split("_")[1];
            return products.filter(
              (product) => product.categoryID === parseInt(categoryID)
            );
          }
        } catch (e) {
          return products.filter(
            (product) => product.shop === parseInt(this.shop)
          );
        }
    }
  };

  static contextType = StateContext;

  render() {
    return (
      <View style={{ paddingBottom: 46 }}>
        <View style={styles.title}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ paddingTop: 15 }}>
              <Caption>Discover {this.processProducts().length} Items</Caption>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              {/* <FilterButton /> */}
              <IconButton
                size={20}
                onPress={() => this.props.route.navigation.navigate("Search")}
                icon="magnify"
              />
            </View>
          </View>
        </View>
        <ScrollView style={styles.productContainer}>
          {this.props.route.shop === "*" && (
            <View>
              <PopularProducts
                title="Top selling"
                navigation={this.props.route.navigation}
              />
              <Text style={{ marginBottom: 9 }}>All Products</Text>
            </View>
          )}
          <ImageLayouts
            data={this.processProducts()}
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
