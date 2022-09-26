import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function RestaurantItem() {
  return (
    <View>
      <RestaurantImage />
      <RestaurantInfo />
    </View>
  );
}

const RestaurantImage = () => (
  <>
    <Image
      source={require("../assets/images/bg1.jpg")}
      style={{
        width: "100%",
        height: 180,
      }}
    />
    <TouchableOpacity
      style={{
        position: "absolute",
        right: 20,
        top: 10,
      }}
    >
      <MaterialCommunityIcons name="heart-outline" size={25} color="black" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <View>
      <Text style={{ fontWeight: "600" }}>farmhouse kitchen thai</Text>
      <Text style={{ color: "gray" }}>30-45 min </Text>
    </View>
    <Text>4.5</Text>
  </View>
);
