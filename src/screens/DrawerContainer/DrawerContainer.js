import React from "react";
import { View,Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";
import  firebase  from "../../firebase";

export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      // <View style={styles.accountcontent}>
      //      {/* <Text>user name</Text>
      //      <Text>user Email</Text> */}
      // </View>  
      <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton
            title="Home"
            source={require("../../../assets/icons/home.png")}
            onPress={() => {
              navigation.navigate("Home");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Orders"
            source={require("../../../assets/icons/category.png")}
            onPress={() => {
              navigation.navigate("Categories");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="SEARCH"
            source={require("../../../assets/icons/search.png")}
            onPress={() => {
              navigation.navigate("Search");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            // customStyle={{ marginTop: 200}}
            title="LOGOUT"
            onPress={() => {
              firebase.auth()
                .signOut()
                .then(() => {
                  navigation.navigate("SignIn");
                })
                .catch((error) => alert(error.message));
            }}
          />
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
