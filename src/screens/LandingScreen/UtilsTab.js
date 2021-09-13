import React, { Component } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { categories, products } from "../../data/dataArrays";
import { Avatar, List, Chip, Caption } from "react-native-paper";
import { shops } from "../../data/shopArrays";
import { getShopByID } from "../../data/MockDataAPI";

export default class UtilsTab extends Component {
  renderItems = ({ item }) => {
    const { name, id } = item;
    return (
      <Pressable
        onPress={() => this.handleChangeCategory(item)}
        style={{ width: "100%", marginVertical: 18 }}
      >
        <View>
          <Text
            style={{
              color: this.state.active.id === id ? "#632B30" : "#000",
              fontWeight: this.state.active.id === id ? "bold" : "regular",
            }}
          >
            {name}
          </Text>
        </View>
      </Pressable>
    );
  };

  constructor(props) {
    super(props);
    this.state = {
      active: categories[0],
      mode: "products",
    };
  }

  handleChangeCategory = (active) => this.setState({ active: active });

  renderCategoryItems = ({ item: { name, id } }) => {
    const inCategory = products.filter((product) => product.categoryID === id);
    return (
      <View>
        <List.Accordion title={name}>
          <Pressable
            style={{ padding: 6, alignItems: "flex-end" }}
            onPress={() =>
              this.props.route.navigation.navigate("AllProducts", { id, name })
            }
          >
            <Caption>See All</Caption>
          </Pressable>
          <FlatList
            numColumns={3}
            renderItem={({ item }) => {
              const { title, shop, customs } = item;
              const {
                price: { amount, prefix },
                unit: { quantity, text },
              } = customs[0]?.options[0];
              const { themeColor } = getShopByID(shop);
              return (
                <View>
                  <Pressable
                    style={{ alignItems: "center", marginRight: 9 }}
                    onPress={() => {
                      const category = title;
                      const shopName = name;
                      const themeColorName = themeColor;
                      this.props.route.navigation.navigate("Details", {
                        item,
                        themeColorName,
                        category,
                        shopName,
                      });
                    }}
                  >
                    <Avatar.Image source={{ uri: item.photo_url }} />
                    <Text>{title}</Text>
                    <Caption>
                      {quantity} {text} - {prefix} {amount}
                    </Caption>
                  </Pressable>
                </View>
              );
            }}
            data={inCategory.slice(0, 6)}
          />
        </List.Accordion>
      </View>
    );
  };

  renderShopCategories = ({ item: { name, shopCategory } }) => {
    const { subcategories } = categories.filter(
      (cat) => cat.id === shopCategory
    )[0];
    return (
      <View>
        <List.Accordion title={name}>
          <Pressable
            style={{ padding: 6, alignItems: "flex-end" }}
            onPress={() => this.props.route.navigation.navigate("AllProducts")}
          >
            <Caption>See All</Caption>
          </Pressable>
          <FlatList
            numColumns={3}
            renderItem={({ item }) => {
              const { name, image_url } = item;
              return (
                <View style={{ alignItems: "center" }}>
                  <Avatar.Image
                    style={{ marginRight: 12, marginBottom: 4 }}
                    source={{ uri: image_url }}
                  />
                  <Caption>{name}</Caption>
                </View>
              );
            }}
            data={subcategories.slice(0, 6)}
          />
        </List.Accordion>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.root}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginRight: 18, paddingLeft: 6, width: "25%" }}>
              <FlatList
                keyExtractor={(item) => item.id}
                numColumns={1}
                renderItem={this.renderItems}
                data={categories}
              />
            </View>
            <View style={{ width: "69%", marginRight: 12 }}>
              <View>
                <FlatList
                  keyExtractor={(item) => item.id}
                  numColumns={1}
                  renderItem={this.renderCategoryItems}
                  data={this.state.active.subcategories}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    padding: 3,
    flex: 1,
  },
});
