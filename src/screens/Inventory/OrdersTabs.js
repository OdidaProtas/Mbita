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
  getProductById,
  getProductsByCategory,
  getShopByID,
} from "../../data/MockDataAPI";
import * as Haptics from "expo-haptics";

const orderItems = [
  { id: 1, productID: 7, customs: [] },
  { id: 2, productID: 10, customs: [] },
];

export default class OrdersTab extends Component {
  constructor(props) {
    super(props);
    this.shopID = 3;
    this.shop = getShopByID(this.shopID);
  }

  renderOderItem = ({ item }) => {
    const { title, photo_url } = getProductById(item.productID);
    return (
      <View style={{ width: "50%", alignItems: "center" }}>
        <Paragraph>1PC - {title}</Paragraph>
        <Caption>30 Items left</Caption>
        <View style={{ alignItems: "center" }}>
          <Button
            uppercase={false}
            onPress={() => Haptics.impactAsync()}
            icon="shopping"
          >
            Pack
          </Button>
        </View>
        <Divider />
      </View>
    );
  };

  renderItem = ({ item }) => {
    const { name, photo_url } = getCategoryById(item);
    const products = getProductsByCategory(item);
    return (
      <List.Accordion
        title={`Order ABCJJTK`}
        description={`${orderItems.length} Items`}
      >
        <View style={{ padding: 9 }}>
          <View style={{ margin: 1 }}>
            <View style={{ marginTop: 12 }}>
              <Caption>Items</Caption>
            </View>
          </View>

          <FlatList
            numColumns={2}
            data={orderItems}
            renderItem={this.renderOderItem}
          />

          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View style={{ marginTop: 12 }}>
              <Paragraph>Order summary</Paragraph>
              <Paragraph style={{ marginTop: 18 }}>Amount: Ksh. 300</Paragraph>
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
            <Paragraph>10.58pm</Paragraph>
            <Paragraph>
              <Caption>Scheduled</Caption> 3/2/15 11.22am
            </Paragraph>
            <Paragraph>
              <Caption>Payment</Caption> Verified
            </Paragraph>
            <Paragraph>
              <Caption>Copuon </Caption> None
            </Paragraph>
          </View>

          <View
            style={{
              justifyContent: "center",
              marginBottom: 6,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Button
              theme={{ color: { primary: "#F27059" } }}
              uppercase={false}
              icon="cancel"
              onPress={() => Haptics.impactAsync("medium")}
            >
              Suspend
            </Button>
            <Button
              theme={{ color: { primary: "#F27059" } }}
              uppercase={false}
              icon="checkbox-marked-circle-outline"
              onPress={() => Haptics.impactAsync("medium")}
            >
              Done
            </Button>
          </View>
        </View>
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
            <Paragraph>1 - 3/9/2021</Paragraph>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <IconButton
              onPress={() => Haptics.impactAsync("medium")}
              size={20}
              icon="filter-variant"
            />
            <IconButton
              onPress={() => Haptics.impactAsync("medium")}
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
