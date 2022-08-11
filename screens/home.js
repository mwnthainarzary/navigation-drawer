import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import Category from "../components/category";
import HomeStack from "../routes/homeStack";

export default function Home({ navigation }) {
  const [category, setCategory] = useState([
    { name: "Add Farmer", id: 1, icon: "user" },
    { name: "Add Land", id: 2, icon: "address-book" },
    { name: "Add Crop", id: 3, icon: "leaf" },
  ]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#e0e1e2",
      }}
    >
      <View style={{ margin: 15 }}>
        <Text style={{ fontSize: 15, marginTop: 15 }}>Agriculture Survey</Text>
        <Text
          style={{
            fontSize: 25,
            marginBottom: 15,
            fontWeight: "500",
          }}
        >
          Farmer Collection
        </Text>
        {/* <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        /> */}
        {/* Lists */}
        <FlatList
          data={category}
          renderItem={({ item }) => <Category item={item} />}
        />
      </View>
    </View>
  );
}
