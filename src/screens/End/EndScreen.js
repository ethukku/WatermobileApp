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

const image = { uri: "http://gsmcloud.xyz/end.jpg" };
const EndScreen = ({ navigation }) => {
    
  return (
    <View style={styles.Container}>
    <ImageBackground source={image} resizeMode="cover" style={{height:"100%", width:"100%"}}>
    <View style={styles.headerContainer}>

    <Text style={styles.Textinfo}>Thank you For Your Orders{"\n"}Wait For Order Again.</Text>
    </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
          <Text style={styles.buttonText}>Make Another Order</Text>
        </TouchableOpacity>   
      </View>
      </ImageBackground>
    </View>
  );

  };
export default EndScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height:"100%",
    justifyContent: "center",
    alignItems: "center",
  },
 
 
  buttonContainer: {
    width: "90%",
    height:100,
    marginLeft:"5%",
    marginBottom:"25%",
    justifyContent: "center",
    alignItems: "center",
    marginTop:50,
    
    
  },
  headerContainer:{
    width: "100%",
    height:"10%",
    marginTop:300,
    justifyContent: "center",
    alignItems: "center",
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
  Textinfo:{
        fontSize:25,
        margin:25,
        fontWeight: 'bold',
        color:"white",
        textAlign: "auto",
     
  }
});
