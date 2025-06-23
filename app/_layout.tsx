import { useFonts } from "expo-font";
import { Stack, usePathname } from "expo-router";
import { Text } from "react-native";
import Navbar from "../src/components/navbar";
import TopContainer from "../src/components/topContainer";

export default function RootLayout() {
  const pathname = usePathname();

  const TitlePage: string = (() => {
    switch (pathname) {
      case "/events":
        return "Events";
      case "/profile":
        return "Profile";
      default:
        return "Calendar";
    }
  })();

  const [fontsLoaded] = useFonts({
    Ubuntu: require("../assets/fonts/Ubuntu.ttf"),
    ArchivoBlack: require("../assets/fonts/ArchivoBlack.ttf"),
    Arista: require("../assets/fonts/Arista.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>; // TODO custom loading screen
  }

  const showNavbarAndTopContainer = pathname !== "/" && pathname !== "/register";

  return (
    <>
      {showNavbarAndTopContainer && <TopContainer TitlePage={TitlePage} />}
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#ffffff" } }} />
      {showNavbarAndTopContainer && <Navbar />}
    </>
  );
}
