import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import Index from "./screens/index";
import About from "./screens/about";
import Home from "./screens/home";
import Header from "./components/header";
import HomeStack from "./routes/homeStack";
import Icon from "react-native-vector-icons/Ionicons";

export default function App() {
  // const Drawer = createDrawerNavigator();

  const Tab = createBottomTabNavigator();

  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Home" component={Home} />
    //     <Drawer.Screen name="About" component={About} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "About") {
                iconName = focused ? "list" : "list-outline";
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            tabBarLabelStyle: { fontSize: 12, paddingBottom: 10 },
            tabBarStyle: {
              backgroundColor: "white",
              height: 60,
              paddingTop: 10,
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{ tabBarBadge: 3 }}
          />
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
        {/* <Stack.Navigator initialRouteName="Home">
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
        </Stack.Navigator> */}
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
