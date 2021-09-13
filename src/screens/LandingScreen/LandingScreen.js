import React, { Component, useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import {
  Button,
  Caption,
  Divider,
  IconButton,
  Paragraph,
  Title,
} from "react-native-paper";
import { shops } from "../../data/shopArrays";
import ImageLayouts from "react-native-image-layouts";
import Carousel from "react-native-snap-carousel";
import { getCategoryById } from "../../data/MockDataAPI";
import PopularProducts from "../PromotionWidgets/PopularProducts";
import TopShops from "../PromotionWidgets/TopShops";

const { width: viewportWidth } = Dimensions.get("window");

const layoutPattern = [2, 2, 3, 2, 1];

class LandingScreenCarousel extends Component {
  carouselItem = ({
    item: {
      photo_url,
      name,
      shopCategory,
      themeColor,
      id,
      isExternal,
      web_url,
    },
  }) => {
    const category = getCategoryById(shopCategory);
    return (
      <Pressable
        onPress={() => {
          if (isExternal) {
            this.props.navigation.navigate("External", {
              web_url,
              name,
              themeColor,
            });
          } else {
            this.props.navigation.navigate("Home", { id, name });
          }
        }}
      >
        <View>
          <Image style={{ aspectRatio: 3 / 2 }} source={{ uri: photo_url }} />
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: "rgba(228, 228, 208, 0.72)",
              justifyContent: "center",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Title>{name}</Title>
              <Paragraph>{category.name}</Paragraph>
              <Button
                theme={{ colors: { primary: themeColor } }}
                style={{ marginTop: 27, elevation: 0 }}
                mode="contained"
              >
                Visit Shop
              </Button>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  render() {
    return (
      <Carousel
        ref={(c) => {
          this.slider1Ref = c;
        }}
        style={{ marginTop: 9 }}
        data={shops}
        renderItem={this.carouselItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        firstItem={0}
        loop={true}
        autoplay={true}
        autoplayDelay={4000}
        autoplayInterval={4000}
        onSnapToItem={(index) => this.setState({ activeSlide: index })}
      />
    );
  }
}

const LandingScreen = (props) => {
  const renderItem = (item) => {
    const {
      id,
      name,
      photo_url,
      themeColor,
      web_url,
      isExternal,
      shopCategory,
      featured,
    } = item;
    const category = getCategoryById(shopCategory);
    return (
      <Pressable
        onPress={() => {
          if (isExternal) {
            props.route.navigation.navigate("External", {
              web_url,
              name,
              themeColor,
            });
          } else {
            props.route.navigation.navigate("Home", { id, name });
          }
        }}
        style={{ marginBottom: 1 }}
      >
        <View style={styles.shopItem}>
          <Image
            style={{
              borderTopLeftRadius: 2,
              borderTopRightRadius: 2,
            }}
            source={{ uri: photo_url }}
          />
          <View
            style={{
              backgroundColor: themeColor,
              paddingHorizontal: 9,
              paddingVertical: 9,
              alignItems: "center",
              borderBottomEndRadius: 2,
              borderBottomStartRadius: 2,
            }}
          >
            <Paragraph>{name}</Paragraph>
            <Caption>{category.name}</Caption>
            {isExternal ? (
              <IconButton size={5} icon="link" />
            ) : (
              <Caption>{featured.length} Deals</Caption>
            )}
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <ScrollView>
      <View style={[styles.title, { paddingTop: 6 }]}>
        <LandingScreenCarousel navigation={props.route.navigation} />
      </View>
      <Divider />
      <View style={styles.title}>
        <Paragraph style={{ marginLeft: 3 }}>My Favorites</Paragraph>
        <Caption style={{ marginRight: 3 }}>See all</Caption>
      </View>
      <View style={styles.productContainer}>
        <ImageLayouts
          data={shops}
          numberOfColumns={2}
          patterns={layoutPattern}
          renderItem={renderItem}
          dividerPadding={1}
        />
      </View>
      <View style={{ padding: 3 }}>
        <PopularProducts
          navigation={props.route.navigation}
          title="Popular Products"
        />
        <TopShops navigation={props.route.navigation} />
      </View>
    </ScrollView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  title: {
    paddingTop: 18,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productContainer: {
    paddingTop: 18,
    paddingHorizontal: 3,
    paddingBottom: 18,
  },
  shopItem: {},
});
