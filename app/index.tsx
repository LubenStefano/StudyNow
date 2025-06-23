import Bee from "@/src/components/Bee";
import CustomButton from "@/src/components/CustomButton";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Dimensions, Image, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";

export default function SignIn() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Username:", username);
    console.log("Password:", password);

    if (username === "admin" && password === "admin") {
      router.push("/main"); // Navigate to main.tsx
    } else {
      Alert.alert("Error", "Invalid credentials!");
    }
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

      <CustomButton
        onPress={handleSignIn}
        style={ styles.btn}
        text="Sign In"
        color="#000000"
      />

      <View style={styles.register}>
        <Text style={styles.registerText}>
          New to <Text style={{ fontWeight: "bold", fontFamily: "Arista", fontSize: 19 }}>Study</Text>
          <Text style={{ fontWeight: "bold", color: "#ffde59", fontFamily: "Arista",  fontSize: 19}}>Now</Text> ?
        </Text>
        <Text
          style={styles.signUpText}
          onPress={() => router.push("/register")}
        >
          Sign Up
        </Text>
      </View>

      

      <Bee style={styles.bee} />
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
  register: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  registerText: {
    fontSize: 19,
  },
  signUpText: {
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
  bee: {
    position: "absolute",
    bottom: 70,
    left: -120,
    height: "9%",
    resizeMode: "contain",
    transform: [{ rotateY: "180deg" }],
  },
  btn: {
    width: "80%",
    position: "absolute",
    bottom: screenHeight * 0.25,
  },
});
