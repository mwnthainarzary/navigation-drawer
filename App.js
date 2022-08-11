import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import "react-native-gesture-handler";
import Index from "./screens/index";
import About from "./screens/about";
import Home from "./screens/home";
import Header from "./components/header";

export default function App() {
  // const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Home" component={Home} />
    //     <Drawer.Screen name="About" component={About} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: () => <Header />,
              headerStyle: {
                backgroundColor: "#e0e1e2",
                flex: 1,
                justifyContent: "center",
              },
            }}
          />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
