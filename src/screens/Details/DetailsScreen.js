import * as React from "react";
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { IconButton, Title, Caption } from "react-native-paper";
import ProductImageGrid from "../ProductImageGrid/ProductImageGrid";
import BasketBtn from "../Basket/BasketBtn";
import ProductsTab from "../LandingScreen/ProductsTab";
import { shops } from "../../data/shopArrays";

const FirstRoute = (props) => (
  <View style={[styles.container]}>
    <ProductImageGrid {...props} />
  </View>
);
const SecondRoute = (props) => (
  <View style={[styles.container, { marginBottom: 48 }]}>
    <ProductsTab {...props} />
  </View>
);

export default class DiscoverScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: () => (
      <SafeAreaView
        style={{
          backgroundColor: navigation.getParam("themeColorName"),
        }}
      >
        <StatusBar
          animated={true}
          backgroundColor={navigation.getParam("themeColorName")}
          barStyle={"default"}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            onPress={() => navigation.goBack()}
            size={30}
            icon="arrow-left-circle"
          />
          <BasketBtn navigation={navigation} />
        </View>
        <View style={{ alignItems: "center" }}>
          <Title>{navigation.getParam("item").title}</Title>
          <Caption>
            {navigation.getParam("category")} -{" "}
            {navigation.getParam("shopName")}
          </Caption>
        </View>
      </SafeAreaView>
    ),
  });

  shop = shops.filter(
    (shop) => shop.name === this.props.navigation.getParam("shopName")
  ).id;

  state = {
    index: 0,
    routes: [
      { key: "first", title: "Product", navigation: this.props.navigation },
      {
        key: "second",
        title: "Similar Products",
        navigation: this.props.navigation,
        shop: `category_${this.props.navigation.getParam("item").categoryID}`,
      },
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
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});
