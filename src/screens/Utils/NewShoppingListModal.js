import React, { Component } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { TextInput } from "react-native-paper";

class NewShoppingListModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>New Shopping List</Text>
              <TextInput
                theme={{ roundness: 24 }}
                label="Title"
                onChangeText={(text) => console.log(text)}
                autoFocus
              />
              <View style={{ alignItems: "center", marginTop: 36 }}>
                <Pressable
                  style={[styles.button, styles.buttonClose, { width: 100 }]}
                  onPress={() => this.setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Save</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <View style={{ alignItems: "center" }}>
          <Pressable
            style={[styles.button, styles.buttonOpen, { width: 108 }]}
            onPress={() => this.setModalVisible(true)}
          >
            <Text style={styles.textStyle}>New</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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

export default NewShoppingListModal;
