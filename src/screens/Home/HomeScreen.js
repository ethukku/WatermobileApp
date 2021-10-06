import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import { products } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: () => <MenuImage
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  });

  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.category}>{item.price}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View style={styles.layoutContainer}>
        {/* <Image source={require('../../../assets/images/1.png')}/> */}
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={products}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Order')} style={styles.button}>
          <Text style={{marginTop:10,fontSize:20}}>Get Start</Text>
        </TouchableOpacity>
        
      </View>
    </View>
    );
  }
}


