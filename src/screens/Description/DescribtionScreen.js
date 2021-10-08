import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import BackButton from '../../components/BackButton/BackButton';
import ViewIngredientsButton from '../../components/ViewIngredientsButton/ViewIngredientsButton';

const { width: viewportWidth } = Dimensions.get('window');

export default class DescribtionScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: 'true',
      headerLeft: () => <BackButton
        onPress={() => {
          navigation.goBack();
        }}
      />
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0
    };
  }

  renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.image_url }} />
      </View>
    </TouchableHighlight>
  );



  render() {
    const { activeSlide } = this.state;
    const { navigation } = this.props;
    const item = navigation.getParam('item');


    return (
      <ScrollView style={styles.container}>
          <View style={styles.carouselContainer}>
            <View style={styles.imageContainer}>
          <View style={styles.carousel}>
          <Image style={styles.image} source={{ uri: item.image_url }} />           
          </View>
          </View>
        </View>
        <View style={styles.infoRecipeContainer}>
          <Text style={styles.infoRecipeName}>Product Name -{item.name}</Text>
          <Text style={styles.infoRecipeName}>Product Price -{item.price}</Text>
          <Text style={styles.infoRecipeName}>Availability  - {(item.availabilty = true) ? "Yes" : "NO"}</Text>
          <Text style={styles.infoRecipeName}>Available Product -{item.availableproduct}</Text>

        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Order')} style={styles.button}>
          <Text style={styles.buttonText}> buy now</Text>
        </TouchableOpacity> 
        
        </View>
      </ScrollView>
    );
  }
}

/*cooking steps
<View style={styles.infoContainer}>
  <Image style={styles.infoPhoto} source={require('../../../assets/icons/info.png')} />
  <Text style={styles.infoRecipe}>Cooking Steps</Text>
</View>
<Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
*/
