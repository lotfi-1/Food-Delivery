/** @format */

import * as React from "react";
import { StyleSheet, Text, SafeAreaView, Pressable } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { gray, green } from "../styles/colors";
const CheckBoxComp = React.forwardRef(({ style, children }, ref) => {
  const [checked, setChecked] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    getValue: () => checked, // Expose the getCheckboxValue function using the ref
  }));

  return (
    <SafeAreaView style={[styles.container, style]}>
      <CheckBox
        ref={ref}
        style={styles.checkbox}
        disabled={false}
        value={checked}
        onValueChange={(newValue) => setChecked(newValue)}
        tintColors={{ true: green, false: gray }}
      />
      <Pressable onPress={() => setChecked(!checked)}>
        <Text
          style={[styles.text, checked ? { color: green } : { color: gray }]}
        >
          {children}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
});
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
  },
});
export default CheckBoxComp;
