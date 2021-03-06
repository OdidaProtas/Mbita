import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ImageLayouts from "react-native-image-layouts";
import { Caption, Chip } from "react-native-paper";
import ImageViewer from "../ImageViewer/ImageViewer";
import CustomOrder from "../OrderCustomization/CustomOrder";
import ReviewsWidget from "../../components/Widgets/ReviewsWidget";
import SimilarItems from "../Basket/SimilarItems";
import PopularProducts from "../PromotionWidgets/PopularProducts";
import { AddToBasket } from "../CategoryDetails/CategoryShopScreen";

const layoutPattern = [1, 3, 2];

const OptionsSummaryWidget = ({ items }) => {
  const renderItem = ({ item }) => {
    return <Chip>{item.name}</Chip>;
  };
  return (
    <View style={{ padding: 9 }}>
      <Caption>Available Options</Caption>
      <FlatList
        numColumns={6}
        renderItem={renderItem}
        data={items}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default class ProductImageGrid extends Component {
  constructor(props) {
    super(props);
    this.item = this.props.route.navigation.getParam("item");
    this.theme = this.props.route.navigation.getParam("themeColorName");
    this.state = {
      modalOpen: false,
      uri: "",
    };
  }
  renderItem = (uri, _index) => (
    <TouchableOpacity
      underlayColor="rgba(73,182,77,0.0)"
      onPress={() => this.setState({ modalOpen: true, uri: uri })}
    >
      <Image source={{ uri: uri }} style={styles.image} />
    </TouchableOpacity>
  );

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  updateImg = (uri) => {
    this.setState({ uri: uri });
  };

  render() {
    return (
      <ScrollView>
        <ImageViewer
          item={this.item}
          open={this.state.modalOpen}
          uri={this.state.uri}
          close={this.closeModal}
          updateImage={this.updateImg}
          shopID={this.item.shop}
        />
        <ImageLayouts
          data={this.item.photosArray}
          numberOfColumns={2}
          patterns={layoutPattern}
          renderItem={this.renderItem}
          dividerPadding={2}
        />
        <View style={{ marginTop: 18, marginLeft: 9 }}>
          <Text>{this.item.description}</Text>
        </View>
        <View>
          <AddToBasket item={this.item} />
        </View>
        <OptionsSummaryWidget items={this.item.customs} />
        <ReviewsWidget />
        <View style={{ padding: 2 }}>
          <PopularProducts
            title="You recently viewed"
            navigation={this.props.route.navigation}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 155,
  },
});
