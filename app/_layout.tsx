import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text } from "react-native";
import Navbar from "../src/components/navbar";
import TopContainer from "../src/components/topContainer";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Ubuntu: require("../assets/fonts/Ubuntu.ttf"),
    ArchivoBlack: require("../assets/fonts/ArchivoBlack.ttf")
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>; // TODO custom loading screen
  }

  return (
    <>
      <TopContainer />
      <Stack screenOptions={{ headerShown: false }} />
      <Navbar />
    </>
  );
}
