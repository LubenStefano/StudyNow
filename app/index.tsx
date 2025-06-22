import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import EventCard from "../src/components/eventCard";
import useEvents from "../src/hooks/useEvents";
import useLoader from "../src/hooks/useLoader";

export default function SignIn() {
  const { events, loading, loadEvents } = useEvents();
  const { renderLoader } = useLoader(styles.loader);

  const [sections, setSections] = useState({
    upcoming: false,
    waiting: false,
    finished: false,
  });

  const toggleSection = async (section: "upcoming" | "waiting" | "finished") => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] })); // Toggle section state
    if (!sections[section] && !events[section]) {
      loadEvents(section); 
    }
  };

  const renderSection = (title: string, type: "upcoming" | "waiting" | "finished") => (
    <View style={styles.section}>
      <TouchableOpacity onPress={() => toggleSection(type)}>
        <Text style={styles.sectionTitle}>{title}</Text>
      </TouchableOpacity>
      {sections[type] && (
        loading[type] ? (
          renderLoader(true) // Use loader here
        ) : (
          <FlatList
            data={events[type] || []}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <EventCard
                title={item.title}
                date={item.date}
                type={item.type}
                style={styles.eventCard}
              />
            )}
          />
        )
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={["upcoming", "waiting", "finished"]}
        keyExtractor={(item) => item}
        renderItem={({ item }) =>
          renderSection(
            sections[item as "upcoming" | "waiting" | "finished"]
              ? item === "upcoming"
                ? "Upcoming Events ▲"
                : item === "waiting"
                ? "Waiting for Result ▲"
                : "Finished Events ▲"
              : item === "upcoming"
              ? "Upcoming Events ▼"
              : item === "waiting"
              ? "Waiting for Result ▼"
              : "Finished Events ▼",
            item as "upcoming" | "waiting" | "finished"
          )
        }
      />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 20,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#ffffff",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  eventCard: {
    marginBottom: 20,
  },
  loader: {
    left: "40%",
  },
});
