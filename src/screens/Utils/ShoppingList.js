import React, { Component } from "react";
import { Pressable, View, FlatList } from "react-native";
import {
  IconButton,
  Paragraph,
  Divider,
  List,
  Caption,
  Avatar,
  Button,
  FAB,
} from "react-native-paper";
import { Checkbox } from "react-native-paper";
import numberWithCommas from "../../data/formatNumber";
import { getProductById } from "../../data/MockDataAPI";
import NewShoppingListModal from "./NewShoppingListModal";

export default class ShoppingList extends Component {
  data = [
    {
      id: "id",
      title: "Weekly 1",
      color: "#9BC4BD",
      options: [3, 4, 1],
      dateAdded: new Date(),
    },
  ];

  constructor(props) {
    super(props);
  }

  renderItem = ({ item }) => {
    const { id, title, color, options, dateAdded } = item;

    let isChecked = false;

    const toggleChecked = () => {
      isChecked = !isChecked;
    };

    const miniRenderItem = (prop) => {
      const {
        photo_url,
        title,
        unit: { quantity, text },
        price: { prefix, amount },
      } = getProductById(prop.item);
      return (
        <View>
          <List.Item
            title={`${quantity} ${text} - ${title} top"`}
            description={`${prefix} ${numberWithCommas(amount)}`}
            right={(props) => (
              <Checkbox
                status={isChecked ? "checked" : "unchecked"}
                onPress={() => {
                  toggleChecked();
                }}
              />
            )}
            left={(props) => (
              <Avatar.Image
                style={{ marginTop: 6 }}
                source={{ uri: photo_url }}
                size={36}
              />
            )}
          />
        </View>
      );
    };

    return (
      <Pressable style={{ backgroundColor: color, paddingBottom: 12 }}>
        <View
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <IconButton
            onPress={() => console.log("haha")}
            size={20}
            icon="close"
          />
        </View>
        <View style={{ alignItems: "center", marginBottom: 9 }}>
          <Paragraph>{title}</Paragraph>
        </View>
        <Divider />
        <FlatList
          data={options}
          renderItem={miniRenderItem}
          keyExtractor={(item) => options.indexOf(item)}
        />
        <Divider />
        <View
          style={{
            marginVertical: 9,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View>
            <Paragraph>Total: Ksh. 300</Paragraph>
            <Caption>
              Added: {dateAdded.getDate()} / {dateAdded.getMonth()} /{" "}
              {dateAdded.getFullYear()}
            </Caption>
            <Button
              theme={{ colors: { primary: color } }}
              style={{ elevation: 0, marginTop: 9 }}
              mode={"contained"}
            >
              Checkout Selected
            </Button>
          </View>
        </View>
      </Pressable>
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: 36,
          paddingBottom: 72,
          paddingTop: 36,
        }}
      >
        <FlatList
          keyExtractor={(item) => item.id}
          renderItem={this.renderItem}
          data={this.data}
        />
        <NewShoppingListModal />
      </View>
    );
  }
}
