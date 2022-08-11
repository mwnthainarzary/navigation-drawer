import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import SingleView from "../screens/singleView";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SingleView" component={SingleView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
