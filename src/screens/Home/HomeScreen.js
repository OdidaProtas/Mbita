import React from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { Button, IconButton, Chip } from "react-native-paper";
import { getCategoryName } from "../../data/MockDataAPI";
import ChatButtonWidget from "../../components/VariantsWidgets/ChatButtonWidet";

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: () => (
      <IconButton
        icon="shopping"
        size={25}
        onPress={() => navigation.navigate("Basket")}
        style={{ marginRight: 9 }}
      />
    ),
    title: navigation.getParam("category"),
    headerLeft: () => (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    ),
  });

  constructor(props) {
    super(props);
    this.shopID = this.props.navigation.getParam("id");
    this.data = recipes.filter(
      (recipe) => recipe.shop === parseInt(this.shopID)
    );
  }

  onPressRecipe = (item) => {
    this.props.navigation.navigate("Recipe", { item });
  };

  chipStyles = {
    position: "absolute",
    bottom: 9,
    right: 9,
    color:"#2cd18a"
  };

  rating = (
    <View
      style={{
        position: "absolute",
        bottom: 9,
        left: 6,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Chip icon="star" size={10} style={{ border: "none" }}>
        4.5
      </Chip>
    </View>
  );

  renderRecipes = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.0)"
      onPress={() => this.onPressRecipe(item)}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>

        {this.rating}
          <Button color="#2cd18a" disable style={this.chipStyles} size={10} >
            Ksh 700
          </Button>
        
        <View
          style={{
            position: "absolute",
            alignSelf: "flex-end",
            top: 6,
            right: 6,
            backgroundColor:"white",
            padding:5,
            borderRadius:12
          }}
        >
          <Text
            style={{
              color:"orange"
            }}
          >
            {getCategoryName(item.categoryId)}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View style={{flex:1}}>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={this.data}
          renderItem={this.renderRecipes}
          keyExtractor={(item) => `${item.recipeId}`}
        />
        <ChatButtonWidget navigation={this.props.navigation}/>
      </View>
    );
  }
}
