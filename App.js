import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB.js";
import DetailsScreen from "./screens/DetailsScreen.js";

function HomeScreen({ navigation }) {
  const [colors, setColors] = useState([]);
  
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Add" onPress={addColor} />,
    })
  })

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Details", { ...item });
        }}
      >
        <BlockRGB red={item.red} green={item.green} blue={item.blue} />
      </TouchableOpacity>
    );
  }

  function addColor() {
    setColors([
      {
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256),
        id: `${colors.length}`,
      },
      ...colors,
    ]);
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={colors}
        renderItem={renderItem}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Kueh Lapis" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
  },
});
