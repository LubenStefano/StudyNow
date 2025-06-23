import CustomButton from "@/src/components/CustomButton";
import { router } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Image, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";

export default function Register() {
 const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSignUp = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Repeat Password:", repeatPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/logoDesign.png")}
          style={styles.img}
        />

        <Text style={styles.title}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.title}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text style={styles.title}>Repeat Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Repeat Password"
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          secureTextEntry
        />

        <CustomButton
          onPress={handleSignUp}
          style={ styles.btn}
          color="#000000"
          text="Sign Up"
        />

        <View style={styles.signIn}>
          <Text style={styles.signInTxt}>
            Already in <Text style={{ fontWeight: "bold", fontFamily: "Arista", fontSize: 19 }}>Study</Text>
            <Text style={{ fontWeight: "bold", color: "#ffde59", fontFamily: "Arista",  fontSize: 19}}>Now</Text> ?
          </Text>
          <Text
            style={styles.signInText}
             onPress={() => router.push("/")}
          >
            Sign In
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const { height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: screenHeight * 0.12, // 12% of screen height for responsive top padding
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    color: "#545454",
    alignSelf: "flex-start",
    marginLeft: "14%",
  },
  input: {
    width: "80%",
    height: 60,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 35,
    paddingHorizontal: 15,
    marginBottom: 30,
    fontSize: 16,
    color: "#cccccc",
  },
  img: {
    width: "100%",
    aspectRatio: 2,
    resizeMode: "contain",
    marginBottom: 20,
  },
  signIn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  signInTxt: {
    fontSize: 19,
  },
  signInText: {
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
  btn: {
    width: "80%",
    position: "absolute",
    bottom: screenHeight * 0.15,
  },
});
