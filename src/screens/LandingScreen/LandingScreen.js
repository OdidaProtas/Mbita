import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import { shops } from '../../data/shopArrays';
import { getNumberOfRecipes } from '../../data/MockDataAPI';
import MenuImage from '../../components/MenuImage/MenuImage';
import { IconButton,  } from "react-native-paper";
import SizeWidget from '../../components/VariantsWidgets/SizeWidget';

export default class LandingScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight:()=> (
      <IconButton
        icon="shopping"
        size={25}
        onPress={()=>navigation.navigate("Basket")}
        style={{marginRight:9}}
      />
    ),
    title: 'Home',
    headerLeft: () => <MenuImage
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  })

  



  constructor(props) {
    super(props);
  }

  onPressCategory = item => {
    const category = item.name;
    const id = item.id;
    this.props.navigation.navigate('Home', {category, id});
  };

  renderCategory = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.0)' onPress={() => this.onPressCategory(item)}>
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.categoriesName}>{item.name}</Text>
        <Text style={styles.categoriesInfo}>{item.category}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          data={shops}
          renderItem={this.renderCategory}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}
