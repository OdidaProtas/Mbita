import React, { Component } from "react";
import { Text, View, FlatList, Image } from "react-native";
import { Caption, IconButton } from "react-native-paper";
import Paragraph from "react-native-paper/lib/commonjs/components/Typography/Paragraph";
import { products } from "../../data/dataArrays";
import numberWithCommas from "../../data/formatNumber";
import { getCategoryById, getShopByID } from "../../data/MockDataAPI";
import * as Haptics from "expo-haptics";
import { AddToBasket } from "../CategoryDetails/CategoryShopScreen";

export default class PostAddSuggestions extends Component {
  renderItem = ({ item }) => {
    const { photo_url, title, shop } = item;
    const {
      price: { amount, prefix },
    } = customs[0]?.options[0];

    const { themeColor } = getShopByID(shop);
    // const { subcategories } = getCategoryById(shopCategory);
    // const { name } = subcategories[categoryID];

    return (
      <View style={{ marginRight: 2 }}>
        <Image
          style={{ height: 110, width: 166, borderRadius: 2 }}
          source={{ uri: photo_url }}
        />
        <View
          style={{
            backgroundColor: themeColor,
            paddingHorizontal: 6,
            borderBottomEndRadius: 2,
            borderBottomStartRadius: 2,
            paddingVertical: 6,
          }}
        >
          {/* <Caption>{name}</Caption> */}
          <Text>{title}</Text>
          <Paragraph>
            {prefix}. {numberWithCommas(amount)}
          </Paragraph>
          <View style={{ position: "absolute", right: 2, top: 2 }}>
            <AddToBasket item={item} />
          </View>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View>
        <View style={{ alignItems: "center", paddingBottom: 36 }}>
          <Text> Check out other products </Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={products.slice(0, 4)}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}
