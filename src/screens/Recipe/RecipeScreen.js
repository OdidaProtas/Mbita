import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  getIngredientName,
  getCategoryName,
  getCategoryById,
} from "../../data/MockDataAPI";
import BackButton from "../../components/BackButton/BackButton";
import ViewIngredientsButton from "../../components/ViewIngredientsButton/ViewIngredientsButton";
import { IconButton } from "react-native-paper";
import ReviewsWidget from "../../components/VariantsWidgets/ReviewsWidget";


const { width: viewportWidth } = Dimensions.get("window");

export default class RecipeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: "true",
      headerRight: () => (
        <IconButton
          icon="shopping"
          size={25}
          onPress={() => navigation.navigate("Basket")}
          style={{ marginRight: 9 }}
        />
      ),
      title: "Instructions",
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  onPressIngredient = (item) => {
    var name = getIngredientName(item);
    let ingredient = item;
    console.log(ite)
    if (item.isDIY) {
      this.props.navigation.navigate("Ingredient", { ingredient, name });
    } else {
      console.log("add to cart");
    }
  };

  render() {
    const { activeSlide } = this.state;
    const { navigation } = this.props;
    const item = navigation.getParam("item");
    const category = getCategoryById(item.categoryId);
    const title = getCategoryName(category.id);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View style={styles.carousel}>
            <Carousel
              ref={(c) => {
                this.slider1Ref = c;
              }}
              style={{}}
              data={item.photosArray}
              renderItem={this.renderImage}
              sliderWidth={viewportWidth}
              itemWidth={viewportWidth}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              firstItem={0}
              loop={false}
              autoplay={false}
              autoplayDelay={500}
              autoplayInterval={3000}
              onSnapToItem={(index) => this.setState({ activeSlide: index })}
            />
            <Pagination
              dotsLength={item.photosArray.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotColor="rgba(255, 255, 255, 0.92)"
              dotStyle={styles.paginationDot}
              inactiveDotColor="white"
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={this.slider1Ref}
              tappableDots={!!this.slider1Ref}
            />
          </View>
        </View>
        <View style={styles.infoRecipeContainer}>
          <Text style={styles.infoRecipeName}>{item.title}</Text>
          <View style={styles.infoContainer}>
            <TouchableHighlight
              underlayColor="rgba(73,182,77,0.0)"
              onPress={() =>
                navigation.navigate("RecipesList", { category, title })
              }
            >
              <Text style={styles.category}>
                {getCategoryName(item.categoryId).toUpperCase()}
              </Text>
            </TouchableHighlight>
          </View>

          <View style={styles.infoContainer}>
            <Image
              style={styles.infoPhoto}
              source={require("../../../assets/icons/time.png")}
            />
            <Text style={styles.infoRecipe}>{item.time} minutes </Text>
          </View>

          <View style={styles.infoContainer}>
            <ViewIngredientsButton
              onPress={() => {
                let ingredients = item.ingredients;
                let title = "Customize Order - " + item.title;
                if(item.customs.length > 0){
                  navigation.navigate("IngredientsDetails", {
                    ingredients,
                    title,
                  });
                }else{
                  console.log("Added")
                }
              }}
            />
          </View>
        
          <View style={styles.infoContainer}>
            <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
          </View>
          <ReviewsWidget/>
        </View>
      </ScrollView>
    );
  }
}
