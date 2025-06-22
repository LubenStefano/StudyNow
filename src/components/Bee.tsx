import React from "react";
import { Image, StyleSheet, ImageStyle } from "react-native";

interface BeeProps {
    style: ImageStyle
}

export default function Bee({ style }: BeeProps) {
  return (
    <Image
      source={require("../../assets/images/bee.png")}
      style={[
        styles.bee, style
      ]}
    />
  );
}

const styles = StyleSheet.create({
  bee: {
    position: "absolute",
    resizeMode: "contain",
  },
});