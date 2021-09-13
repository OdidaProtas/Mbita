import React, { Component } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { getCategoryById, getShopByID } from "../../data/MockDataAPI";
import {
  Caption,
  IconButton,
  Paragraph,
  Provider,
  Menu,
  Divider,
} from "react-native-paper";

export default class ArtikPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  toggleMenu = () => this.setState({ menuOpen: true });

  render() {
    const { open, toggle, item } = this.props;
    const { title, categoryID, shop, customs } = item;
    const {
      price: { amount, prefix },
      unit: { quantity, text },
    } = customs[0]?.options[0];

    const { name } = getShopByID(shop);
    return (
      <Provider>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={open}
            onRequestClose={() => {
              toggle();
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Chooose an option</Text>
                <Text>
                  {title} - {name}
                </Text>
                {/* <Caption>{category.name}</Caption> */}
                <Paragraph style={{ marginTop: 18 }}>
                  <Caption>
                    {quantity} {text}{" "}
                  </Caption>
                  {prefix} {amount}
                </Paragraph>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <IconButton icon="star" />
                  <IconButton icon="share" />
                  <Menu
                    visible={this.state.menuOpen}
                    onDismiss={this.toggleMenu}
                    anchor={
                      <IconButton onPress={this.toggleMenu} icon="shopping" />
                    }
                  >
                    <Menu.Item onPress={() => {}} title="Item 1" />
                    <Menu.Item onPress={() => {}} title="Item 2" />
                    <Divider />
                    <Menu.Item onPress={() => {}} title="Item 3" />
                  </Menu>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 0,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    minWidth: 108,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
