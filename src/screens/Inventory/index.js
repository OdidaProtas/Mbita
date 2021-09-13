import * as React from "react";
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { FAB, Title, Paragraph, IconButton, Caption } from "react-native-paper";
import InventoryTab from "./InventoryTab";
import { getShopByID } from "../../data/MockDataAPI";
import POS from "./POS";
import OrdersTab from "./OrdersTabs";
import * as Haptics from "expo-haptics";
import OverView from "./overview";

const InventoryButton = () => {
  return <FAB icon="pencil" style={styles.fab} />;
};

const FirstRoute = (props) => (
  <View style={[styles.container]}>
    <OverView {...props} />
    <InventoryButton />
  </View>
);

const SecondRoute = (props) => (
  <View style={[styles.container]}>
    <InventoryTab {...props} />
  </View>
);
const ThirdRoute = () => (
  <View style={[styles.container]}>
    <OrdersTab />
  </View>
);
const FourthRoute = (props) => (
  <View style={[styles.container]}>
    <POS {...props} />
  </View>
);

export default class HelpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.shopID = 3;
  }

  static navigationOptions = ({ navigation }) => ({
    header: () => (
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
            icon="menu"
            onPress={() => navigation.openDrawer()}
            style={{ margin: 9 }}
          />
          <IconButton
            size={27}
            onPress={() => navigation.navigate("Notification")}
            icon="bell"
          />
        </View>
        <View style={{ paddingLeft: 18 }}>
          <Paragraph>Artik</Paragraph>
          <Title>{getShopByID(3).name}</Title>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View>
              <IconButton
                onPress={() => Haptics.impactAsync("medium")}
                size={15}
                icon="pencil"
              />
            </View>
            <View>
              <IconButton
                size={20}
                onPress={() => Haptics.impactAsync("medium")}
                icon="shopping"
              />
            </View>
          </View>

          <Caption>{getShopByID(3).category}</Caption>
        </View>
      </SafeAreaView>
    ),
  });
  state = {
    index: 0,
    routes: [
      {
        key: "second",
        title: "Catalogue",
        navigation: this.props.navigation,
        shopID: this.shopID,
      },
      { key: "third", title: "Orders" },
      { key: "fourth", title: "Scanner", navigation: this.props.navigation },
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
