import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestruants = [
  {
    name: "Beachside",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
    categories: ["cafe", "bar"],
    price: "100",
    rating: "4.5",
  },
  {
    name: "Roadside",
    image_url:
      "https://media.gettyimages.com/photos/pan-fried-duck-picture-id1081422898?s=612x612",
    categories: ["cafe", "bar"],
    price: "44",
    rating: "4.9",
  },
  {
    name: "Indian Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
    categories: ["cafe", "bar"],
    price: "100",
    rating: "4.5",
  },
  {
    name: "Sungrill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
    categories: ["cafe", "bar"],
    price: "500",
    rating: "4.5",
  },
];

export default function RestaurantItems() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 10 }}>
      {/* loop start  */}
      {localRestruants.map((restaurant, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 8, backgroundColor: "white" }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
      {/* loop ends  */}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
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

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 5,
    }}
  >
    <View>
      <Text style={{ fontWeight: "600" }}>{props.name}</Text>
      <Text style={{ color: "gray" }}>30-45 min </Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        padding: 6,
        borderRadius: 30,
        marginRight: 10,
      }}
    >
      <Text style={{ color: "grey", fontWeight: "900" }}>{props.rating}</Text>
    </View>
  </View>
);
