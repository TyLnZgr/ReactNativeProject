import { StyleSheet, View, Text, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
/* import { useRoute } from "@react-navigation/native"; */
function MealsOverviewScreen({ route, navigation }) {
  /*  const route=useRoute() */ //alternative way route
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
