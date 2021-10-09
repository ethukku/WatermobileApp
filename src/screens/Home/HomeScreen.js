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

export default class HomeScreen extends React.Component {
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Order", {
                items: this.state.basketItems,
              })
            }
            style={styles.button}
          >
            <Text style={{ marginTop: 10, fontSize: 20 }}>Go to Basket</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
