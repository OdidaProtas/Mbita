import React from "react";
import { Pressable, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";
import AccountWidget from "../Auth/AccountWidget";
import { Button, IconButton, Title } from "react-native-paper";

export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.content}>
        <Pressable
          style={{ position: "absolute", top: 55, left: 23 }}
          onPress={() => navigation.navigate("LandingScreen")}
        >
          <Title
            style={{
              fontSize: 31,
            }}
          >
            Artik
          </Title>
        </Pressable>
        <View style={styles.container}>
          <MenuButton
            title="HOME"
            source={require("../../../assets/icons/home.png")}
            onPress={() => {
              navigation.navigate("LandingScreen");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="DISCOVER"
            source={require("../../../assets/icons/category.png")}
            onPress={() => {
              navigation.navigate("Discover");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="ORDERS"
            source={require("../../../assets/icons/bag.png")}
            onPress={() => {
              navigation.navigate("Orders");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="SEARCH"
            source={require("../../../assets/icons/search.png")}
            onPress={() => {
              navigation.navigate("Search");
              navigation.closeDrawer();
            }}
          />
        </View>
        <AccountWidget navigation={navigation} />
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
