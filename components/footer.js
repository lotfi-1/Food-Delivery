/** @format */

import { View, Text, Pressable, StyleSheet } from "react-native";
import { green, gray } from "../styles/colors";
export default function Footer({ style, navigation, text, name, children }) {
  return (
    <View style={[styles.view, style]}>
      <Text style={styles.text}>{children}</Text>
      <Pressable
        style={styles.buttun}
        onPress={() => navigation.navigate(name)}
      >
        <Text style={styles.link}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    columnGap: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  text: {
    fontSize: 14,
    color: gray,
  },
  buttun: {
    height: "100%",
    justifyContent: "center",
  },
  link: {
    fontSize: 16,
    color: green,
  },
});
