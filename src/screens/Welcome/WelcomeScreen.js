import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
    {/* <Image source={require('../../../assets/images/1.png')} /> */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.button}>
          <Text style={styles.buttonText}>Get Start</Text>
        </TouchableOpacity>   
      </View>
    </View>
  );

  };
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
 
 
  buttonContainer: {
    width: "90%",
    marginLeft:"5%",
    marginBottom:"5%",
    justifyContent: "center",
    alignItems: "center",
    marginTop:550,
    
    
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
