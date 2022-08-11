import React from "react";
import HomeStack from "../routes/homeStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import SingleView from "../screens/singleView";

const Stack = createNativeStackNavigator();
export default function Index() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Home} />
      <Stack.Screen name="SingleView" component={SingleView} />
    </Stack.Navigator>
  );
}
