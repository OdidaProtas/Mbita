import React, { Component } from "react";
import {
  View,
  Dimensions,
  TouchableHighlight,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import {
  getCategoryById,
  getRecipes,
  getShopByID,
} from "../../data/MockDataAPI";
import { shops } from "../../data/shopArrays";
import Carousel from "react-native-snap-carousel";
import {
  Button,
  Caption,
  IconButton,
  Paragraph,
  Title,
} from "react-native-paper";
import { products } from "../../data/dataArrays";
import ChatButtonWidet from "../../components/Widgets/ChatButtonWidet";
import ImageLayouts from "react-native-image-layouts";
import { AddToBasket } from "../CategoryDetails/CategoryShopScreen";

const layoutPattern = [2, 2, 2, 1, 2, 1];

const { width: viewportWidth } = Dimensions.get("window");

export default class FeaturedTab extends Component {
  constructor(props) {
    super(props);
    this.shopId = this.props.route.id;
    this.navigation = this.props.route.navigation;
    this.products = products.filter((product) => product.shop === this.shopId);
    this.categoriesArray = this.products.map((product) => product.categoryID);
    this.categoryIDs = this.categoriesArray.filter(this.onlyUnique);
    this.shop = getShopByID(this.shopId);
    this.shopCategory = this.shop.shopCategory;
    this.productCategories = getCategoryById(this.shopCategory);
    this.filteredCategories = this.productCategories.subcategories.filter(
      (category) => this.categoryIDs.includes(category.id)
    );

    this.state = {
      activeSlide: 0,
    };
  }

  onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  renderImage = ({ item }) => {
    const { photo_url, title, customs } = item;
    const {
      price: { amount, prefix },
      unit: { quantity, text },
    } = customs[0]?.options[0];

    return (
      <TouchableHighlight>
        <View>
          <Image style={{ aspectRatio: 2 / 3 }} source={{ uri: photo_url }} />
          <View
            style={{
              position: "absolute",
              bottom: 0,
              backgroundColor: "#fff",
              width: "50%",
              right: 0,
              borderRadius: 2,
              padding: 9,
            }}
          >
            <Paragraph>{title}</Paragraph>
            <Caption>
              {quantity} {text}
            </Caption>
            <Title>
              {prefix}. {amount}
            </Title>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                paddingTop: 6,
                alignItems: "flex-end",
              }}
            >
              <IconButton icon="heart-outline" />
              <AddToBasket item={item} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  handlePress(item) {
    const themeColor = this.shop.themeColor;
    const shop = this.shop;
    this.navigation.navigate("CategoryShop", { item, themeColor, shop });
  }

  renderCategory = (item) => {
    return (
      <TouchableHighlight
        underlayColor="rgba(73,182,77,0.0)"
        onPress={() => this.handlePress(item)}
      >
        <View
          style={{
            display: "flex",
            height: 100,
            backgroundColor: "#fff",
            alignItems: "center",
            padding: 18,
            justifyContent: "center",
            marginBottom: 1,
            borderRadius: 2,
          }}
        >
          <Title>{item.name}</Title>
          <Caption>Starting Ksh. 200</Caption>
        </View>
      </TouchableHighlight>
    );
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: this.shop.themeColor }}>
        <ScrollView>
          <Carousel
            ref={(c) => {
              this.slider1Ref = c;
            }}
            style={{ marginTop: 9 }}
            data={this.products}
            renderItem={this.renderImage}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            firstItem={0}
            loop={true}
            autoplay={true}
            autoplayDelay={2000}
            autoplayInterval={3000}
            onSnapToItem={(index) => this.setState({ activeSlide: index })}
            layout="tinder"
            layoutCardOffset={18}
          />
          <View style={styles.shopSummary}>
            <Title>{this.shop.category}</Title>
            <Caption>{this.products.length} Products</Caption>
            <Paragraph style={{ marginVertical: 9 }}>
              High quality, stylish and fashionable foorwear
            </Paragraph>
            <IconButton
              size={30}
              style={{ elevation: 0, position: "absolute", left: 9 }}
              icon="star-outline"
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: this.shop.themeColor,
              paddingTop: 22,
              paddingHorizontal: 3,
              paddingBottom: 108,
            }}
          >
            <ImageLayouts
              data={this.filteredCategories}
              numberOfColumns={2}
              showsHorizontalScrollIndicator={false}
              patterns={layoutPattern}
              renderItem={this.renderCategory}
              keyExtractor={(item) => `${item.id}`}
              dividerPadding={1}
            />
          </View>
        </ScrollView>
        <ChatButtonWidet
          themeColor={this.shop.themeColor}
          navigation={this.navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  shopSummary: {
    marginVertical: 0,
    alignItems: "center",
  },
});
