import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function ({ route }) {
  const { red, green, blue } = route.params;
  const avgColor = (red + blue + green) / 3;
  const textColor = (avgColor < 100) ? 'white' : 'black';

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: `rgba(${red}, ${green}, ${blue}, 1)` },
      ]}
    >
      <Text style={[styles.text, { color:  textColor }]}>
        Red: {red}
      </Text>
      <Text style={[styles.text, { color:  textColor }]}>
        Green: {green}
      </Text>
      <Text style={[styles.text, { color:  textColor }]}>
        Blue: {blue}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
  },
});
