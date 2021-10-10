import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  ImageBackground,
  Button,
} from "react-native";
import styles from "./styles";
import { products } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import DrawerActions from "react-navigation";
import { useNavigation } from "@react-navigation/core";
import { GlobalContext } from '../../context/GlobalContext';

export default class HomeScreen extends React.Component {
  static contextType = GlobalContext

  componentDidMount() {
    const contextObj = this.context

    console.log(contextObj.authUser) // { name: 'Tania', loggedIn: true }
  }
  
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: () => (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    ),
  });

  state = {
    basketItems: [],
  };

  constructor(props) {
    super(props);
  }
  onPressProduct = (item) => {
    this.props.navigation.navigate("Describtion", { item });
  };
  onPressOrder = (products) => {
    this.props.navigation.navigate("Order", { products });
  };

  renderProducts = ({ item }) => (
    <TouchableHighlight
      underlayColor="blue"
      onPress={() => this.onPressProduct(item)}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.image_url }} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.category}>{item.price}</Text>
        <Button
          onPress={() => {
            this.state.basketItems.push(item);
            console.log(this.state.basketItems);
          }}
          title="Add to Basket"
        />
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <React.Fragment>
      <View style={styles.layoutContainer}>
        <View>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={products}
            renderItem={this.renderProducts}
            keyExtractor={(item) => `${item.id}`}
          />
        </View>
        <View style={{flex:1}}>
        </View>
      </View>
          <TouchableOpacity
            style={{
              backgroundColor:"blue",
              borderRadius: 8,
              marginHorizontal: 20,
              height:60,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              paddingLeft:10
            }}
            onPress={() =>
              this.props.navigation.navigate("Order", {
                items: this.state.basketItems,
              })
            }
            style={styles.button}
          >
            <Text style={{ fontSize: 18, lineHeight: 18 * 1.4,color:"white", }}>Go to Basket</Text>
          </TouchableOpacity>
          </React.Fragment>
    );
  }
}
