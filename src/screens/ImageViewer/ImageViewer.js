import React, { Component } from "react";
import { Modal, StyleSheet, View, Image, Dimensions } from "react-native";
import { IconButton, Title, Caption, Paragraph } from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import numberWithCommas from "../../data/formatNumber";
import { getCategoryById, getShopByID } from "../../data/MockDataAPI";

const { width: viewportWidth } = Dimensions.get("window");

const renderItem = ({ item }) => {
  return (
    <Image
      style={{ borderRadius: 2, aspectRatio: 2 / 3 }}
      source={{ uri: item }}
    />
  );
};

export default class ImageViewer extends Component {
  render() {
    const {
      open,
      close,
      item: { title, photosArray, categoryID, customs },
    } = this.props;
    const {
      price: { amount, prefix },
      unit: { quantity, text },
    } = customs[0]?.options[0];

    const { name, shopCategory } = getShopByID(this.props.shopID);
    const { subcategories } = getCategoryById(shopCategory);

    const categoryName = subcategories.filter((cat) => cat.id === categoryID)[0]
      .name;

    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={open}
          onRequestClose={close}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  paddingTop: 36,
                  paddingBottom: 18,
                  alignItems: "center",
                }}
              >
                <Paragraph>
                  {title} {categoryName}
                </Paragraph>
                <Caption>{name}</Caption>
                <Caption>
                  {quantity}
                  {text} - {prefix}. {numberWithCommas(amount)}
                </Caption>
              </View>
              <Carousel
                ref={(c) => {
                  this.slider1Ref = c;
                }}
                style={{ marginTop: 9 }}
                data={photosArray}
                renderItem={renderItem}
                sliderWidth={viewportWidth}
                itemWidth={viewportWidth}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                firstItem={0}
                loop={true}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={3000}
                onSnapToItem={(index) => this.setState({ activeSlide: index })}
              />
            </View>
          </View>
          <View style={{ padding: 18, alignItems: "center", marginBottom: 48 }}>
            <IconButton size={36} onPress={close} icon="close" />
          </View>
        </Modal>
      </View>
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
    backgroundColor: "white",
    borderRadius: 4,
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
