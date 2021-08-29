import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import {
  getIngredientName,
  getAllIngredients,
} from '../../data/MockDataAPI';
import SizeWidget from '../../components/VariantsWidgets/SizeWidget';
import FlavorWidget from '../../components/VariantsWidgets/FlavorWidget';
import ShapeWidet from '../../components/VariantsWidgets/ShapeWidget';
import ColorWidget from '../../components/VariantsWidgets/ColorWidget';
import QuantityWidget from '../../components/VariantsWidgets/QuantityWidget';
import DescWidget from '../../components/VariantsWidgets/DescWidget';
import SummaryWidet from '../../components/VariantsWidgets/SummaryWidget';
import { IconButton } from 'react-native-paper';
import DateWidget from '../../components/VariantsWidgets/DateWidget';
import DeliveryWidget from '../../components/VariantsWidgets/DeliveryWidget';

export default class IngredientsDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
      headerTitleStyle: {
        fontSize: 16
      },
      headerRight: () => (
        <IconButton
          icon="shopping"
          size={25}
          onPress={() => navigation.navigate("Basket")}
          style={{ marginRight: 9 }}
        />
      )
    };
  };

  constructor(props) {
    super(props);
  }

  onPressIngredient = item => {
    let name = getIngredientName(item.ingredientId);
    let ingredient = item.ingredientId;
    this.props.navigation.navigate('Ingredient', { ingredient, name });
  };

  renderIngredient = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.0)' onPress={() => this.onPressIngredient(item[0])}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item[0].photo_url }} />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{ color: 'grey' }}>{item[1]}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('ingredients');
    const ingredientsArray = getAllIngredients(item);

    return (
      <View>
        <SizeWidget/>
        <FlavorWidget/>
        <ShapeWidet/>
        <ColorWidget/>
        <QuantityWidget/>
        <DescWidget/>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={ingredientsArray}
          renderItem={this.renderIngredient}
          keyExtractor={item => `${item.recipeId}`}
        />
        <DeliveryWidget/>
        <DateWidget/>
        <SummaryWidet navigation={navigation}/>
      </View>
    );
  }
}
