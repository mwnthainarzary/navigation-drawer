import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Category({ item }) {
  return (
    <TouchableOpacity>
      <View
        style={{
          padding: 15,
          backgroundColor: "white",
          borderRadius: 5,
          fontSize: 20,
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        <Icon
          name={item.icon}
          size={25}
          style={{ marginRight: 10 }}
          color="blue"
        />
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Category;
