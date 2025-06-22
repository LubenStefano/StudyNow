import { useFonts } from "expo-font";
import { Stack, usePathname } from "expo-router";
import { Image, Text } from "react-native";
import Navbar from "../src/components/navbar";
import TopContainer from "../src/components/topContainer";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Ubuntu: require("../assets/fonts/Ubuntu.ttf"),
    ArchivoBlack: require("../assets/fonts/ArchivoBlack.ttf")
  });
  const pathname = usePathname();

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>; // TODO custom loading screen
  }

  return (
    <>
      <TopContainer />
      {pathname === "/" && (
        <Image
          style={{
            width: 220,
            height: 240,
            position: "absolute",
            top: 50,
            right: 10,
            zIndex: 1000, 
          }}
          source={require("../assets/images/frontGirlPng.png")}
        />
      )}
      <Stack screenOptions={{ headerShown: false }} />
      <Navbar />
    </>
  );
}
