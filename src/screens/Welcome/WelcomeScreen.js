import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground
} from "react-native";
const image = { uri: "http://gsmcloud.xyz/getstartf.jpg" };


const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.Container}> 
    <ImageBackground source={image} resizeMode="cover" style={{height:"100%", width:"100%"}}>

    <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('End')} style={styles.button}>
          <Text style={styles.buttonText}>Get Start</Text>
        </TouchableOpacity>   
      </View>
    </ImageBackground>
    </View>
  );

  };
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    height:"100%",
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
