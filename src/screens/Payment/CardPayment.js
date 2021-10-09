import React from "react";
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

export default class CardPaymentScreen extends React.Component {
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

  render() {
    const { navigation } = this.props;

    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{ flex: 2, paddingHorizontal: 10, marginTop: 120 }}>
          <Text style={{ fontSize: 17 }}>Card Number</Text>
          <TextInput
            multiline
            numberOfLines={1}
            style={{ borderBottomWidth: 1, marginBottom: 30 }}
            placeholder="Enter the card number"
          />

          <Text style={{ fontSize: 17 }}>Expiry date</Text>
          <TextInput
            multiline
            numberOfLines={1}
            style={{ borderBottomWidth: 1, marginBottom: 30 }}
            placeholder="Enter the expiry date"
          />

          <Text style={{ fontSize: 17 }}>CVC</Text>
          <TextInput
            multiline
            numberOfLines={1}
            style={{ borderBottomWidth: 1, marginBottom: 30 }}
            placeholder="Enter the CVC number"
          />
        </View>
        <Button
          onPress={() => this.props.navigation.navigate("End")}
          title="Confirm order"
        />
      </View>
    );
  }
}
