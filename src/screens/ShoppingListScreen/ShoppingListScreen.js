import * as React from "react";
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { FAB, IconButton, Title } from "react-native-paper";
import ShoppingList from "../Utils/ShoppingList";
import { products } from "../../data/dataArrays";
import ProductsTab from "../LandingScreen/ProductsTab";
import BasketBtn from "../Basket/BasketBtn";

const InventoryButton = () => {
  return <FAB icon="plus" style={styles.fab} />;
};

const FirstRoute = (props) => (
  <View style={[styles.container]}>
    <ShoppingList {...props} />
  </View>
);
const SecondRoute = (props) => (
  <View style={[styles.container]}>
    <ProductsTab {...props} />
  </View>
);

export default class ShoppingListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: () => (
      <View
        style={{
          backgroundColor: "fff",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton icon="menu" onPress={() => navigation.openDrawer()} />
          <BasketBtn navigation={navigation} />
        </View>
        <View style={{ alignItems: "center" }}>
          <Title>Shopping List</Title>
        </View>
      </View>
    ),
  });

  state = {
    index: 0,
    routes: [
      {
        key: "first",
        title: "Shopping List",
        navigation: this.props.navigation,
      },
      {
        key: "second",
        title: "Wish List",
        navigation: this.props.navigation,
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
    // paddingTop: Constants.statusBarHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  fab: {
    position: "absolute",
    bottom: 18,
    right: 18,
    elevation: 0,
  },
});
