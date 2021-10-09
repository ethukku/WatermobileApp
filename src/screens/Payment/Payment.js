import React from "react";
import { Alert } from "react-native";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  Button,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import BackButton from "../../components/BackButton/BackButton";
import ViewIngredientsButton from "../../components/ViewIngredientsButton/ViewIngredientsButton";

const { width: viewportWidth } = Dimensions.get("window");

export default class PaymentScreen extends React.Component {
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
  }
  state = {
    deliveryAddress: "",
  };

  cardPaymentPress = () => {
    if (this.state.deliveryAddress === "") {
      Alert.alert("Please enter delivery address");
    } else {
      this.props.navigation.navigate("CardPaymentScreen");
    }
  };

  cashOnDeliveryPress = () => {
    if (this.state.deliveryAddress === "") {
      Alert.alert("Please enter delivery address");
    } else {
      this.props.navigation.navigate("End");
    }
  };

  render() {
    const { navigation } = this.props;
    const total = navigation.getParam("total");
    console.log("total", total);

    return (
      <View
        style={{
          flex: 1,
          //   justifyContent: "center",
          //   alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 3,
            marginTop: 100,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Discount Amount -
            </Text>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}> 0 LKR</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Total Amount -
            </Text>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              {" "}
              {`${total} LKR`}
            </Text>
          </View>
        </View>
        <View style={{ flex: 2, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 17, marginBottom: 10 }}>
            Delivery Address
          </Text>
          <TextInput
            onChangeText={(text) => this.setState({ deliveryAddress: text })}
            multiline
            numberOfLines={4}
            style={{ borderBottomWidth: 1, marginBottom: 100 }}
            placeholder="Enter your delivery address"
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 3,
          }}
        >
          <View style={{ marginBottom: 10 }}>
            <Button
              onPress={this.cashOnDeliveryPress}
              title="Cash on Delivery"
            />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Button onPress={this.cardPaymentPress} title="Card payment" />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Button
              onPress={() => {
                console.log("deliveryAddress", this.state.deliveryAddress);
              }}
              color="red"
              title="Cancel the delivery"
            />
          </View>
        </View>
      </View>
    );
  }
}
