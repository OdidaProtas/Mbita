import React, { Component } from "react";
import { View, StyleSheet, FlatList, Image, Pressable } from "react-native";
import {
  Button,
  Paragraph,
  List,
  Avatar,
  IconButton,
  FAB,
  Caption,
  Divider,
  Chip,
} from "react-native-paper";
import {
  getCategoryById,
  getProductsByCategory,
  getShopByID,
} from "../../data/MockDataAPI";
import * as Haptics from "expo-haptics";

export default class InventoryTab extends Component {
  constructor(props) {
    super(props);
    this.shopID = 3;
    this.shop = getShopByID(this.shopID);
  }

  variantChip = ({ item }) => {
    const { label, image } = item;
    return (
      <Chip
        style={{ margin: 3 }}
        avatar={(props) => <Avatar.image source={{ uri: image }} {...props} />}
        onPress={() => console.log("Pressed")}
      >
        {label}
      </Chip>
    );
  };

  variantItem = ({ item }) => {
    const { name, options } = item;
    return (
      <View>
        <Caption>{name}</Caption>
        <Divider />
        <View style={{ marginTop: 3 }}>
          <FlatList
            numColumns={3}
            keyExtractor={(item) => options.indexOf(item)}
            renderItem={this.variantChip}
            data={options}
          />
        </View>
      </View>
    );
  };

  inventoryitem = ({ item }) => {
    const {
      title,
      photo_url,
      price: { prefix, amount },
      unit: { text, quantity },
      customs,
    } = item;
    return (
      <Pressable
        onPress={() => console.log("pressed")}
        style={{
          width: "100%",
          backgroundColor: this.shop.themeColor,
          marginBottom: 12,
          borderRadius: 2,
        }}
      >
        <View>
          <Image
            style={{
              borderTopLeftRadius: 2,
              borderTopRightRadius: 2,
              height: 72,
              width: "100%",
            }}
            source={{ uri: photo_url }}
          />
          <View style={{ padding: 9 }}>
            <Paragraph>{title}</Paragraph>
            <Caption>
              Starting {quantity} {text} - {prefix} {amount}
            </Caption>

            {/* <Caption style={{ marginTop: 12 }}>Inventory 10 /90</Caption> */}
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginTop: 12,
              }}
            >
              <Paragraph>
                <Caption>Items</Caption> 10/90
              </Paragraph>
              <Paragraph>
                <Caption>Last added </Caption> 4/5/15
              </Paragraph>
              <Paragraph>
                <Caption>Last ordered </Caption>4/5/15
              </Paragraph>
            </View>

            <Caption style={{ marginTop: 12 }}>Interactions </Caption>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 9,
                paddingHorizontal: 2,
              }}
            >
              <Paragraph>
                <Caption>Views</Caption> 10
              </Paragraph>
              <Paragraph>
                <Caption>Orders</Caption> 3
              </Paragraph>
              <Paragraph>
                <Caption>Rated</Caption> 4
              </Paragraph>
              <Paragraph>
                <Caption>Popularity </Caption> 10%
              </Paragraph>
            </View>

            <View style={{ alignItems: "center", marginBottom: 6 }}>
              <Button
                uppercase={false}
                icon="trending-up"
                onPress={() => Haptics.impactAsync("medium")}
              >
                Boost item
              </Button>
            </View>
            <Divider />

            <List.Accordion
              style={{ backgroundColor: this.shop.themeColor }}
              title="More details"
            >
              {/* <Paragraph style={{ marginVertical: 12 }}>15 Items left</Paragraph> */}
              {/* <Divider /> */}
              <View style={{ padding: 9 }}>
                <Caption>Variations</Caption>
                <FlatList
                  data={customs}
                  renderItem={this.variantItem}
                  keyExtractor={(item) => customs.indexOf(item)}
                />
              </View>
            </List.Accordion>

            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingTop: 12,
              }}
            >
              <View>
                <Button uppercase={false} style={{ elevation: 0 }}>
                  Edit
                </Button>
              </View>

              <Button uppercase={false} size={20}>
                Preview
              </Button>
              <Button uppercase={false} size={20}>
                Sell
              </Button>
              <Button uppercase={false} size={20}>
                Hide
              </Button>
              <IconButton
                onPress={() => Haptics.impactAsync()}
                icon="share"
                uppercase={false}
                size={20}
              >
                Share
              </IconButton>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  renderItem = ({ item }) => {
    const { name, photo_url } = getCategoryById(item);
    const products = getProductsByCategory(item);
    return (
      <List.Accordion
        style={{ backgroundColor: this.shop.themeColor }}
        title={`${name}`}
        description={`${products.length} Items`}
      >
        <View style={{ padding: 9 }}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View style={{ marginTop: 12 }}>
              <Paragraph>Category summary</Paragraph>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                onPress={() => Haptics.impactAsync("medium")}
                size={20}
                icon="share"
              />
              <IconButton
                onPress={() => Haptics.impactAsync("medium")}
                size={20}
                icon="eye-off-outline"
              />
            </View>
          </View>
          <Caption style={{ marginTop: 12 }}>Interactions </Caption>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginBottom: 9,
              padding: 2,
            }}
          >
            <Paragraph>
              <Caption>Views</Caption> 10
            </Paragraph>
            <Paragraph>
              <Caption>Orders</Caption> 3
            </Paragraph>
            <Paragraph>
              <Caption>Rated</Caption> 4
            </Paragraph>
            <Paragraph>
              <Caption>Popularity </Caption> 10%
            </Paragraph>
          </View>

          <View style={{ alignItems: "center", marginBottom: 6 }}>
            <Button
              uppercase={false}
              icon="trending-up"
              onPress={() => Haptics.impactAsync("medium")}
            >
              Boost category
            </Button>
          </View>
        </View>
        <FlatList
          keyExtractor={(item) => item.id}
          renderItem={this.inventoryitem}
          data={products}
        />
      </List.Accordion>
    );
  };

  render() {
    return (
      <View style={{ flex: 1, paddingBottom: 72 }}>
        <View
          style={{
            padding: 9,
            paddingTop: 0,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View>
            <Paragraph>{this.shop.categoriesArray.length} Categories</Paragraph>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <IconButton
              onPress={() =>
                this.props.route.navigation.navigate("ProductForm")
              }
              size={20}
              icon="plus"
            />
            <IconButton
              onPress={() => this.props.route.navigation.navigate("Search")}
              size={20}
              icon="magnify"
            />
          </View>
        </View>
        <View>
          <FlatList
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            data={this.shop.categoriesArray}
          />
        </View>
        {/* <FAB icon="plus" style={styles.fab} /> */}
      </View>
    );
  }
}
