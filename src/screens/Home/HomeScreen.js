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
import FeaturedTab from "./FeaturedTab";
import { IconButton, Title } from "react-native-paper";
import { shops } from "../../data/shopArrays";
import ProductsTab from "../LandingScreen/ProductsTab";
import BasketBtn from "../Basket/BasketBtn";

const FirstRoute = (props) => {
  return (
    <View style={[styles.container]}>
      <FeaturedTab {...props} />
    </View>
  );
};
const SecondRoute = (props) => (
  <View style={[styles.container]}>
    <ProductsTab {...props} />
  </View>
);

let myTheme;

export default class HomeTabs extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.navigation.getParam("id");
    this.shop = shops.filter((shop) => shop.id === parseInt(this.id))[0];
    this.themeColor = this.shop.themeColor;
    myTheme = this.themeColor;
  }

  static navigationOptions = ({ navigation }) => ({
    header: () => (
      <SafeAreaView
        style={{
          backgroundColor: myTheme,
        }}
      >
        <StatusBar
          animated={true}
          backgroundColor={myTheme}
          barStyle={"default"}
        />

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
          <Title>{navigation.getParam("name")}</Title>
        </View>
      </SafeAreaView>
    ),
  });

  state = {
    index: 0,
    routes: [
      {
        key: "first",
        title: "Featured",
        id: this.props.navigation.getParam("id"),
        navigation: this.props.navigation,
      },
      {
        key: "second",
        title: "All Products",
        navigation: this.props.navigation,
        shop: this.props.navigation.getParam("id"),
      },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={[styles.tabBar, { backgroundColor: this.themeColor }]}>
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
              <Animated.Text style={[{ opacity }]}>{route.title}</Animated.Text>
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

  componentDidMount() {
    console.log(this.props);
  }

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
    paddingTop: 18,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});
