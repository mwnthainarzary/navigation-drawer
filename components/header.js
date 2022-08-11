import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
function Header() {
  return (
    <Text
      style={{
        textAlign: "center",
        fontSize: 20,
        flex: 1,
        fontWeight: "bold",
        color: "black",
      }}
    >
      BTR Agri Survey
    </Text>
  );
}

export default Header;
