import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from "react-native";
const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLasttname] = useState("");
  const [address, setAddress] = useState("");
  const [contactno, setContactno] = useState("");

  const image = { uri: "http://gsmcloud.xyz/logo.png" };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("SignIn");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    firebase.auth() 
      .createUserWithEmailAndPassword(email, password)
      .then(async(userCredentials) => {
        const user = userCredentials.user;
        await firebase.firestore()
            .collection('users')
            .doc(user.uid)
            .set({
              firstname,
              lastname,
              contactno,
              email,
              address
            }).then(res=>{
              console.log("Registered sucess");
            }).catch(err=>console.log('firestore error',err))
      })
      .catch((error) => alert(error.message));
  };

  // const handleLogin = () => {
  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then((userCredentials) => {
  //       const user = userCredentials.user;
  //       console.log("Logged in with:", user.email);
  //     })
  //     .catch((error) => alert(error.message));
  // };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.logocontainer}>
      <Image source={image} style={styles.logo}/>
      </View>
      <View style={styles.inputContainer}>
      <TextInput
          placeholder="First Name"
          value={firstname}
          onChangeText={(text) => setFirstname(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Last Name"
          value={lastname}
          onChangeText={(text) => setLasttname(text)}
          style={styles.input}
        />
        <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        />
        <TextInput
          placeholder="Address"
          value={address}
          onChangeText={(text) => setAddress(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Contact No"
          value={contactno}
          onChangeText={(text) => setContactno(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logocontainer:{
    width:"80%",
    height:100,
    justifyContent: "center",
    alignItems: "center",

  },
  logo:{
   width:150,
   height:100 
  },  
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
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
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
