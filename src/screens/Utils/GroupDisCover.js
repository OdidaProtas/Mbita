import * as React from "react";
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { FAB } from "react-native-paper";

const InventoryButton = () => {
  return <FAB icon="format-list-bulleted-type" style={styles.fab} />;
};

const FirstRoute = (props) => (
  <View style={[styles.container]}>
    {/* <PersonalTab {...props} /> */}
  </View>
);
const SecondRoute = () => <View style={[styles.container]}></View>;

export default class GroupDiscover extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "My Account" },
      { key: "second", title: "FAQ & Help" },
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
