import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight,
  Button,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import BackButton from "../../components/BackButton/BackButton";
import styles from "./styles";
import ViewIngredientsButton from "../../components/ViewIngredientsButton/ViewIngredientsButton";

const { width: viewportWidth } = Dimensions.get("window");

export default class OrderScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: "true",
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
        <Image style={styles.image} source={{ uri: item.image_url }} />
      </View>
    </TouchableHighlight>
  );

  renderProducts = ({ item }) => (
    <View style={styles.container}>
      <Image style={styles.photo} source={{ uri: item.image_url }} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.category}>{item.price}</Text>
    </View>
  );

  fillTotal = (item) => {
    const total = item.reduce((item, data) => item + data.price, 0);
    return total;
  };

  render() {
    const { activeSlide } = this.state;
    const { navigation } = this.props;
    const item = navigation.getParam("items");
    console.log("item", item);

    return (
      <View style={{ flex: 1, marginTop: 100 }}>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={item}
          renderItem={this.renderProducts}
          keyExtractor={(item) => `${item.id}`}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "grey",
            padding: 15,
          }}
        >
          <Text style={{ fontSize: 15, color: "white", fontweight: "bold" }}>
            Total
          </Text>
          <Text style={{ fontSize: 15, color: "white", fontweight: "bold" }}>
            {`${this.fillTotal(item)} LKR`}
          </Text>
          <Button
            onPress={() =>
              this.props.navigation.navigate("PaymentScreen", {
                total: this.fillTotal(item),
              })
            }
            title="Checkout"
          />
        </View>
      </View>
    );
  }
}
