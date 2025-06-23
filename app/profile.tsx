import CustomButton from "@/src/components/CustomButton";
import EventCard from "@/src/components/eventCard";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Alert,
    Clipboard,
    Keyboard,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";

export default function ProfileScreen() {
  const userName = "LubenStefano";
  const friendID = "3qs4k4qHkVaSE8R6UuLGhuCMuG";

  const [inputID, setInputID] = useState("");

  const [showPassedExams, setShowPassedExams] = useState(false); // State for toggle

  const passedExams = [
    {
      title: "Chemistry Quiz",
      date: new Date(2025, 5, 20),
      type: "finished",
      status: "passed",
    }, // 20.6.2025
    {
      title: "French Oral Exam",
      date: new Date(2025, 5, 19),
      type: "finished",
      status: "passed",
    }, // 19.6.2025
  ];

  const copyToClipboard = () => {
    Clipboard.setString(friendID);
    Alert.alert("Copied", "Your Friend ID has been copied to clipboard!");
  };

  const addFriend = () => {
    if (inputID.trim() === "") {
      Alert.alert("Error", "Please enter a valid Friend ID!");
      return;
    }
    Alert.alert("Success", `Friend with ID ${inputID} added!`);
    setInputID("");
  };

  const logOut = () => {
    Alert.alert("Logged out", "You have been logged out.");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={{ alignItems: "center", flexDirection: "row", marginBottom: 20 }}
        >
          <View style={[styles.avatar, { backgroundColor: "#00CFFF" }]}>
            <Text style={styles.avatarText}>{userName.charAt(0)}</Text>
          </View>
          <Text style={styles.userName}>{userName}</Text>
        </View>

        <Text style={styles.sectionTitle}>Add Friends</Text>

        <Text style={styles.label}>Your Friend ID</Text>
        <View style={styles.friendIDContainer}>
          <Text style={styles.friendID}>{friendID}</Text>
          <MaterialIcons
            name="content-copy"
            size={24}
            color="#333"
            onPress={copyToClipboard}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Add friend"
          value={inputID}
          onChangeText={setInputID}
        />

        <CustomButton
          text="Add friend"
          onPress={addFriend}
          style={styles.btn}
          color="#0cc0df"
        />

        <View style={{ width: "100%", marginBottom: 20 }}>
          <TouchableOpacity onPress={() => setShowPassedExams(!showPassedExams)}>
            <Text style={[styles.sectionTitle, { marginTop: 30 }]}>
              Passed Exams {showPassedExams ? "▲" : "▼"}
            </Text>
          </TouchableOpacity>
          {showPassedExams && (
            <View>
              {passedExams.map((exam, index) => (
                <EventCard
                  key={index}
                  title={exam.title}
                  date={exam.date}
                  type={exam.type as "finished" | "upcoming" | "waiting"}
                  status={exam.status as "passed" | "failed"}
                  style={{ marginBottom: 20 }}
                />
              ))}
              {passedExams.length === 0 && (
                <Text style={{ textAlign: "center", color: "#999" }}>
                  No passed exams yet.
                </Text>
              )}
            </View>
          )}
        </View>

        <CustomButton
          text="Logout"
          onPress={logOut}
          style={styles.btn}
          color="red"
        />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#00CFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginRight: 20,
  },
  avatarText: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
  },
  userName: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 14,
    marginBottom: 5,
  },
  friendIDContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: "100%",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  friendID: {
    flex: 1,
    marginRight: 10,
    color: "#333",
    fontWeight: "bold",
  },
  input: {
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 8,
    width: "100%",
    padding: 10,
    marginBottom: 20,
  },
  btn: {
    width: "100%",
    marginBottom: 20,
  },
});
