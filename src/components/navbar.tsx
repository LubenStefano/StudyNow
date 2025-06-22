import { Ionicons } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

const tabs: { href: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { href: "/events", icon: "calendar" },
  { href: "/", icon: "home" },
  { href: "/profile", icon: "person" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <NavItem key={index} tab={tab} isFocused={pathname === tab.href} />
      ))}
    </View>
  );
}


type NavItemProps = {
  tab: { href: string; icon: keyof typeof Ionicons.glyphMap };
  isFocused: boolean;
};

function NavItem({ tab, isFocused }: NavItemProps) {
  return (
    <Link href={tab.href as any} asChild>
      <Pressable>
        <Ionicons
          name={tab.icon}
          style={[styles.icons, isFocused && { color: "#FFFFFF", backgroundColor: "#000000" }]}
        />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 20,
    bottom: "5%",
    width: "90%",
    alignSelf: "center",
  },
  icons: {
    fontSize: 40,
    color: "#000000",
    borderColor: "#000000",
    borderWidth: 2,
    padding: 20,
    borderRadius: 50,
  }
});
