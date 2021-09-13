import React from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { SearchBar } from "react-native-elements";
import { IconButton, Paragraph } from "react-native-paper";
import {
  getCategoryName,
  getRecipesByRecipeName,
  getRecipesByCategoryName,
} from "../../data/MockDataAPI";
import { AddToBasket } from "../CategoryDetails/CategoryShopScreen";

export default class SearchScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerRight: (
        <IconButton
          icon="barcode-scan"
          onPress={() => {
            navigation.navigate("Scan");
          }}
        />
      ),
      headerTitle: (
        <SearchBar
          containerStyle={{
            backgroundColor: "transparent",
            borderBottomColor: "transparent",
            borderTopColor: "transparent",
            flex: 1,
          }}
          inputContainerStyle={{
            backgroundColor: "#EDEDED",
          }}
          inputStyle={{
            backgroundColor: "#EDEDED",
            borderRadius: 10,
            color: "black",
          }}
          searchIcond
          clearIcon
          //lightTheme
          round
          onChangeText={(text) => params.handleSearch(text)}
          //onClear={() => params.handleSearch('')}
          placeholder="Search"
          value={params.data}
          autoFocus
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      data: [],
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      handleSearch: this.handleSearch,
      data: this.getValue,
    });
  }

  handleSearch = (text) => {
    var recipeArray1 = getRecipesByRecipeName(text);
    var recipeArray2 = getRecipesByCategoryName(text);
    var aux = recipeArray1.concat(recipeArray2);
    var recipeArray = [...new Set(aux)];
    if (text == "") {
      this.setState({
        value: text,
        data: [],
      });
    } else {
      this.setState({
        value: text,
        data: recipeArray,
      });
    }
  };

  getValue = () => {
    return this.state.value;
  };

  onPressRecipe = (item) => {
    this.props.navigation.navigate("Recipe", { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.0)"
      onPress={() => this.onPressRecipe(item)}
      style={{ width: "50%" }}
    >
      <View>
        <Image
          style={{
            aspectRatio: 3 / 2,
            borderTopLeftRadius: 2,
            borderTopRightRadius: 2,
          }}
          source={{ uri: item.photo_url }}
        />
        <View style={{ padding: 9 }}>
          <Paragraph>{item.title}</Paragraph>
          <Text>{getCategoryName(item.categoryId)}</Text>
        </View>
        <View style={{ position: "absolute", bottom: 9, right: 0 }}>
          <AddToBasket item={item} navigation={this.props.navigation} />
        </View>
      </View>
    </TouchableHighlight>
  );

  render() {
    console.log();
    return (
      <View>
        {this.state.data.length > 0 ? (
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={this.state.data}
            renderItem={this.renderRecipes}
            keyExtractor={(item) => `${item.recipeId}`}
            contentContainerStyle={{ padding: 6 }}
          />
        ) : null}
      </View>
    );
  }
}
