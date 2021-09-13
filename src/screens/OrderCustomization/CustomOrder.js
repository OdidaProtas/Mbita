import React, { Component, useEffect } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import {
  Caption,
  Title,
  Divider,
  Paragraph,
  TextInput,
} from "react-native-paper";
import numberWithCommas from "../../data/formatNumber";
import RadioButtonRN from "radio-buttons-react-native";
import { getCategoryById, getShopByID } from "../../data/MockDataAPI";
import * as Haptics from "expo-haptics";
import { StateContext } from "../../data/state/StateContext";
import { IconButton } from "react-native-paper";
import PostAddSuggestions from "../Basket/PostAddSuggestions";

const CustomOrderItem = (props) => {
  const { item, selectedCustoms } = props;
  const { name, options } = item;

  useEffect(() => {
    selectedCustoms(item.id, options[0].id);
  }, []);
  // const { themeColor } = getShopByID(shop);
  return (
    <View>
      <Caption>{name}</Caption>
      <RadioButtonRN
        data={options}
        initial={1}
        selectedBtn={(e) => {
          selectedCustoms(e.image);
        }}
      />
    </View>
  );
};

class CustomOrder extends Component {
  constructor(props) {
    super(props);
    this.item = this.props.item;
    this.customs = this.item.customs;
    this.navigation = this.props.navigation;
  }

  state = {
    modalVisible: false,
    imageUrl: null,
    quantity: 1,
    options: {},
  };

  updateQuantity = (type) => {
    switch (type) {
      case "REMOVE":
        this.setState({ ...this.state, quantity: this.state.quantity - 1 });
      default:
        this.setState({ ...this.state, quantity: this.state.quantity + 1 });
    }
  };

  selectedCustoms = (option) => {
    this.setState({ imageUrl: option });
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  renderItem = (props) => (
    <CustomOrderItem
      updateQuantity={this.updateQuantity}
      selectedCustoms={this.selectedCustoms}
      {...props}
    />
  );

  handlePress = (item) => {
    console.log(item);
  };

  static contextType = StateContext;

  render() {
    const { modalVisible } = this.state;
    const [{ basket }, dispatch] = this.context;
    const { shop, title, id, customs } = this.item;

    const { name, category, shopCategory } = getShopByID(shop);
    const productCategory = getCategoryById(shopCategory).name;

    const inCart =
      Object.keys(basket)?.filter((id) => id == this.item.id.toString())
        .length > 0;

    const {
      price: { amount, prefix },
      unit: { quantity, text },
    } = customs[0]?.options[0];

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
          <ScrollView>
            <View style={[styles.centeredView, { marginTop: 36 }]}>
              <View style={{ alignItems: "center" }}>
                <Paragraph>
                  {title} - {productCategory}
                </Paragraph>
                <Caption>{name}</Caption>
                <Caption>{category}</Caption>
              </View>
              <View style={styles.modalView}>
                <View style={{ padding: 9, alignItems: "center" }}>
                  <Image
                    style={{ height: 180, width: 180, borderRadius: 2 }}
                    source={{
                      uri: this.state.imageUrl || this.item.photo_url,
                    }}
                  />
                </View>
                <View style={{ height: 300, paddingTop: 25 }}>
                  {inCart ? (
                    <PostAddSuggestions />
                  ) : (
                    <ScrollView showsVerticalScrollIndicator={false}>
                      <View style={{ alignItems: "center" }}>
                        <Paragraph>Available Options</Paragraph>
                      </View>
                      <View style={{ paddingTop: 9 }}>
                        <FlatList
                          {...this.props}
                          renderItem={this.renderItem}
                          data={this.item.customs}
                        />
                        <View style={{ paddingTop: 18 }}>
                          <TextInput
                            theme={{ roundness: 9 }}
                            label="Add a note"
                          />
                      </View>
                      </View>
                    </ScrollView>
                  )}
                </View>
                <Divider />
                <View style={{ alignItems: "center", marginTop: 9 }}>
                  <Title>
                    {prefix}. {numberWithCommas(amount * this.state.quantity)}
                  </Title>
                  <Caption>
                    {this.state.quantity} x {quantity} {text} -{" "}
                    {`${prefix}. ${numberWithCommas(amount)}`}
                  </Caption>
                </View>

                {Object.keys(basket).includes(id.toString()) ? (
                  <>
                    <View style={{ alignItems: "center" }}>
                      <View style={{ flexDirection: "row" }}>
                        <View>
                          <IconButton
                            onPress={() => {
                              if (basket[id]?.quantity === 1) {
                                Haptics.impactAsync("medium");
                                dispatch({
                                  type: "REMOVE_FROM_BASKET",
                                  payload: id,
                                });
                              } else {
                                Haptics.impactAsync("medium");
                                dispatch({
                                  type: "ADD_TO_CART",
                                  quantity: basket[id]?.quantity - 1,
                                  options: [{ id: 1, option: 1 }],
                                });
                              }
                            }}
                            icon="minus-circle"
                          />
                        </View>
                        <View style={{ paddingTop: 13 }}>
                          <Paragraph>{basket[id]?.quantity}</Paragraph>
                        </View>
                        <View>
                          <IconButton
                            onPress={() => {
                              Haptics.impactAsync("mediuma");
                              dispatch({
                                type: "ADD_TO_CART",
                                quantity: basket[id]?.quantity + 1,
                                id: id,
                              });
                            }}
                            icon="plus-circle"
                          />
                        </View>
                      </View>
                    </View>
                    <Pressable
                      style={[
                        styles.button,
                        { backgroundColor: this.props.theme, marginTop: 9 },
                      ]}
                      onPress={() =>
                        dispatch({ type: "ADD_TO_CART", quantity: 1, id: id })
                      }
                    >
                      <Text style={styles.textStyle}>Continue Shopping</Text>
                    </Pressable>
                  </>
                ) : (
                  <Pressable
                    style={[
                      styles.button,
                      { backgroundColor: this.props.theme, marginTop: 9 },
                    ]}
                    onPress={() =>
                      dispatch({ type: "ADD_TO_CART", quantity: 1, id: id })
                    }
                  >
                    <Text style={styles.textStyle}>Add</Text>
                  </Pressable>
                )}
                <Pressable
                  style={[
                    styles.button,
                    { backgroundColor: this.props.theme, marginTop: 9 },
                  ]}
                  onPress={() => {
                    this.props.navigation.navigate("Checkout");
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Checkout Now</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </Modal>
        <IconButton
          onPress={() => this.setState({ modalVisible: true })}
          icon="shopping"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    paddingHorizontal: 9,
  },
  modalView: {
    margin: 6,
    backgroundColor: "white",
    borderRadius: 18,
    // padding: 36,
    paddingTop: 0,
    marginHorizontal: 0,
  },
  button: {
    borderRadius: 20,
    padding: 10,
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 3,
    textAlign: "center",
    marginTop: 18,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    elevation: 0,
  },
});

export default CustomOrder;
