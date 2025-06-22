import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Swing } from "react-native-animated-spinkit";



export default function useLoader(style?: ViewStyle) {
  const renderLoader = (isLoading: boolean) => {
    if (!isLoading) return null;

    return (
      <View style={[styles.loaderContainer, style]}>
        <Swing size={50} color="#ffde59" />
      </View>
    );
  };

  return { renderLoader };
}

const styles = StyleSheet.create({
  loaderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
