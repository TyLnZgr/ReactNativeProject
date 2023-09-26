import { useNavigation } from "@react-navigation/native";
import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

const CategoryGridTile = (props) => {
  const { title, color, onPress } = props;
  const navigation = useNavigation(); // Alternative way , screen ekran yerine prop geçmeyerek burada ekran değişimi yapmak
  /*  function pressHandler() {
    navigation.navigate("MealsOverview");
  } */
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.btn,
          pressed ? styles.btnPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 3,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible", //for android ripple efect
    //IOS SHADOW
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
  },
  btn: {
    flex: 1,
  },
  btnPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
