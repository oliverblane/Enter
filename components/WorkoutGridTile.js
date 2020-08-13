import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colours from "../constants/colours";
import { Ionicons } from "@expo/vector-icons";

const WorkoutGridTile = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.arrowContainer}>
          <Ionicons name="ios-arrow-forward" size={20} color={Colours.accent} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    marginLeft: 15,
    height: 45,
  },

  container: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor: Colours.accent,
    borderLeftColor: "white",
    borderTopColor: Colours.accent,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    textAlign: "left",
    marginLeft: 10,
    color: "black",
  },

  arrowContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 30,
    justifyContent: "center",
  },
});

export default WorkoutGridTile;
