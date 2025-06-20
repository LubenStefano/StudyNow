import Navbar from "@/src/components/navbar";
import TopContainer from "@/src/components/topContainer";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Arista': require('../assets/fonts/Arista-Pro-Regular-trial.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>; // or custom loading screen
  }

  return (
    <>
      <TopContainer />
      <Stack screenOptions={{ headerShown: false }}/>

      <Navbar />
    </>
  );
}