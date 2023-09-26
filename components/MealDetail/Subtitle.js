import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}
export default Subtitle;
const styles = StyleSheet.create({
  subTitle: {
    fontWeight: "bold",
    margin: 4,
    padding: 6,
    fontSize: 18,
    color: "#e2b497",
    textAlign: "center",
  },
  subTitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
  },
});
