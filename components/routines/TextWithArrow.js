import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Colours from "../../constants/colours";

const TextWithArrow = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.exerciseName}>{props.children}</Text>
        <Text style={styles.exerciseSets}>{props.sets} Sets</Text>
      </View>
      <View style={styles.arrowContainer}>
        <Ionicons name="ios-arrow-forward" size={20} color={Colours.accent} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 15,
    justifyContent: "center",
  },

  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  exerciseName: { fontSize: 18, marginBottom: 3, fontWeight: "600" },

  exerciseSets: { fontSize: 14, fontWeight: "200" },
});

export default TextWithArrow;
