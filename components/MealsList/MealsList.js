import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

function MealsList({ items }) {
  function renderMealItem(itemData) {
    const mealItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
      id: itemData.item.id,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={style.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      ></FlatList>
    </View>
  );
}

export default MealsList;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
