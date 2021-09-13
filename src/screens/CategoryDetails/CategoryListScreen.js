import React from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { getCategoryName } from "../../data/MockDataAPI";
import { products } from "../../data/dataArrays";

export default class CategoryScreen extends React.Component {
  constructor(props) {
    super(props);
}

  onPressRecipe = (item) => {
    // this.props.navigation.navigate("Details", { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.0)"
      onPress={() => this.onPressRecipe(item)}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>
          "{getCategoryName(item.categoryId)}"
        </Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={products}
          renderItem={this.renderRecipes}
          keyExtractor={(item) => `${item.recipeId}`}
        />
      </View>
    );
  }
}
