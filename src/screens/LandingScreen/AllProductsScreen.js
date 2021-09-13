import React, { Component } from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import { IconButton, Title, Paragraph } from "react-native-paper";
import BasketBtn from "../Basket/BasketBtn";
import ProductsTab from "./ProductsTab";

export const Header = ({ navigation, title }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          size={30}
          color="#632B30"
          icon="arrow-left-circle"
          onPress={() => navigation.goBack()}
          style={{ margin: 9, marginLeft: 0 }}
        />
        <BasketBtn navigation={navigation} />
      </View>
      <View style={{ paddingLeft: 9 }}>
        <Paragraph style={{ color: "#632B30" }}>Artik</Paragraph>
        <Title style={{ color: "#632B30" }}>{title}</Title>
      </View>
    </SafeAreaView>
  );
};

export default class AllProductsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: () => (
      <Header title={navigation.getParam("name")} navigation={navigation} />
    ),
  });
  render() {
    console.log(this.props.navigation);
    const props = {
      ...this.props,
      route: {
        navigation: this.props.navigation,
        shop: `category_${this.props.navigation.getParam("id")}`,
      },
    };
    return (
      <View>
        <ProductsTab {...props} />
      </View>
    );
  }
}
