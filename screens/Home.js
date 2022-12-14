import { SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, {
  localRestruants,
} from "../components/RestaurantItems";

export default function home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestruants);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems RestaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
