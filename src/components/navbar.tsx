import { Ionicons } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet, View } from "react-native";

const tabs: { href: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { href: "/books", icon: "book" },
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
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: isFocused ? 1.4 : 1,
      useNativeDriver: true,
    }).start();
  }, [isFocused]);

  return (
    <Link href={tab.href as any} asChild>
      <Pressable style={({}) => [styles.link, isFocused && styles.active]}>
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Ionicons name={tab.icon} size={40} color="#4a3222" />
        </Animated.View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffbd59",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 20,
    bottom: "5%",
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    elevation: 5,
  },
  link: {
    padding: 10,
    borderRadius: 16,
  },
  active: {
    backgroundColor: "#fed7aa",
  },
});
