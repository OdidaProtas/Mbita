import * as React from "react";
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { Header } from "../../screens/LandingScreen/AllProductsScreen";
import Carousel from "react-native-snap-carousel";
import { products } from "../../data/dataArrays";
import { getShopByID } from "../../data/MockDataAPI";
import { Paragraph, IconButton, Caption, Title } from "react-native-paper";
import { AddToBasket } from "../CategoryDetails/CategoryShopScreen";
import { FlatList } from "react-native-gesture-handler";

export const customs = [{ id: 1, name: "Welcome", value: 10 }];

const { width: viewportWidth } = Dimensions.get("window");

class ProductsCarousel extends React.Component {
  _renderItem = ({ item, index }) => {
    const { photo_url, shop, customs, title } = item;
    const {
      price: { amount, prefix },
      unit: { quantity, text },
    } = customs[0]?.options[0];
    const { themeColor, name } = getShopByID(shop);
    const handlePress = () => {
      const category = title;
      const shopName = name;
      const themeColorName = themeColor;
      this.props.navigation.navigate("Details", {
        item,
        themeColorName,
        category,
        shopName,
      });
    };
    return (
      <Pressable onPress={handlePress}>
        <Image source={{ uri: photo_url }} style={{ aspectRatio: 2 / 3 }} />
        <View
          style={{
            backgroundColor: themeColor,
            paddingVertical: 9,
            position: "absolute",
            width: viewportWidth / 2,
            bottom: 0,
            paddingLeft: 6,
          }}
        >
          <Paragraph>{item.title}</Paragraph>
          <Caption>{name}</Caption>
          <Paragraph>
            <Caption>
              {quantity}
              {text}
            </Caption>{" "}
            {prefix}. {amount}
          </Paragraph>
          <View style={{ position: "absolute", bottom: -9, right: 0 }}>
            <AddToBasket item={item} />
          </View>
          <IconButton
            style={{ position: "absolute", right: 6 }}
            size={20}
            icon="heart-outline"
          />
        </View>
      </Pressable>
    );
  };

  render() {
    return (
      <Carousel
        ref={(c) => {
          this._carousel = c;
        }}
        loop
        layoutCardOffset={18}
        layout="tinder"
        data={products}
        renderItem={this._renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
      />
    );
  }
}

const FirstRoute = ({ route: { navigation } }) => (
  <View style={[styles.container]}>
    <ProductsCarousel navigation={navigation} />
    <IconButton icon="filter" />
  </View>
);

const Coupons = ({}) => {
  const renderItems = ({ item: { value, name } }) => {
    return (
      <View style={{ padding: 36 }}>
        <Caption>use code </Caption>
        <Title>{name}</Title>
        <Paragraph>{value}% off upto Ksh. 120</Paragraph>
        <Caption>Valid till: 16/15/3050</Caption>
      </View>
    );
  };

  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Caption>Available Coupons</Caption>
      </View>
      <FlatList
        contentContainerStyle={{ padding: 6 }}
        numColumns={2}
        renderItem={renderItems}
        data={customs}
      />
    </View>
  );
};

const SecondRoute = (prop) => (
  <View style={[styles.container]}>
    <Coupons />
  </View>
);

export default class DiscoverScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: () => <Header title="Discover" navigation={navigation} />,
  });

  state = {
    index: 0,
    routes: [
      { key: "first", title: "Products", navigation: this.props.navigation },
      { key: "second", title: "Coupons" },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}
            >
              <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        showPageIndicator={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    // paddingTop: Constants.statusBarHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});
