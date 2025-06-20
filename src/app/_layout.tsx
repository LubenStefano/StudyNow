import { Stack } from "expo-router";
import TopContainer from "../components/topContainer";

export default function RootLayout() {


  return (
    <>
      <TopContainer />
      <Stack screenOptions={{ headerShown: false }}/>

    </>
  );
}