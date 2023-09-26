import { useContext, useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoriteContext } from "../store/context/favorite-context";

function MealDetailScreen({ route, navigation }) {
  const { addFavorite, removeFavorite, ids } = useContext(FavoriteContext);
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = ids.includes(mealId);
  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      removeFavorite(mealId);
    } else {
      addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            color="white"
            icon={mealIsFavorite ? "star" : "star-outline"}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    margin: 8,
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
