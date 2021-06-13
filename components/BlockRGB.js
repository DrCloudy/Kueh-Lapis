import * as React from "react";
import { View } from "react-native";

export default function BlockRGB({ red, green, blue }) {
  return (
    <View
      style={{
        width: "100%",
        height: 80,
        backgroundColor: `rgba( ${red}, ${green}, ${blue}, 1.0)`,
      }}
    />
  );
}
