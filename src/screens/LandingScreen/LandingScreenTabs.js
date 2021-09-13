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
import { IconButton, Title } from "react-native-paper";
import LandingScreenTabOne from "./LandingScreen";
import SellersTab from "./SellersTab";
import ProductsTab from "./ProductsTab";
import UtilsTab from "./UtilsTab";
import BasketBtn from "../Basket/BasketBtn";
import { StateContext } from "../../data/state/StateContext";

const FirstRoute = (props) => (
  <View style={[styles.container]}>
    <LandingScreenTabOne {...props} />
  </View>
);
const SecondRoute = (props) => (
  <View style={[styles.container]}>
    <SellersTab {...props} />
  </View>
);
const ThirdRoute = (props) => (
  <View style={[styles.container]}>
    <ProductsTab {...props} />
  </View>
);
const FourthRoute = (props) => (
  <View style={[styles.container]}>
    <UtilsTab {...props} />
  </View>
);

export default class LandingScreenTabs extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: () => (
      <SafeAreaView>
        <StatusBar
          animated={true}
          backgroundColor="#D5B0AC"
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
            size={27}
            color="#632B30"
            icon="menu"
            onPress={() => navigation.openDrawer()}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <IconButton
              size={27}
              onPress={() => navigation.navigate("Notifications")}
              icon="bell"
              color="#632B30"
            />
            <BasketBtn navigation={navigation} />
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Title>Artik</Title>
        </View>
      </SafeAreaView>
    ),
  });
  F;

  state = {
    index: 0,
    routes: [
      { key: "first", title: "Home", navigation: this.props.navigation },
      { key: "second", title: "Shops", navigation: this.props.navigation },
      {
        key: "third",
        title: "Products",
        navigation: this.props.navigation,
        shop: "*",
      },
      { key: "fourth", title: "Categories", navigation: this.props.navigation },
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
    third: ThirdRoute,
    fourth: FourthRoute,
  });

  static contextType = StateContext;

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
