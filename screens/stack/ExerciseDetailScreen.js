import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colours from "../../constants/colours";

const ExerciseDetailScreen = (props) => {
  const setsNumber = props.navigation.getParam("exerciseSets");

  return (
    <View style={styles.screen}>
      <View style={styles.setsContainer}>
        <TouchableOpacity style={styles.topItem}>
          <Text style={{ fontSize: 18 }}>Warm up sets</Text>
          <View style={styles.number}>
            <Text style={{ fontSize: 18, color: Colours.accent }}>0</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomItem}>
          <Text style={{ fontSize: 18 }}>Sets</Text>
          <View style={styles.number}>
            <Text style={{ fontSize: 18 }}>{setsNumber}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

ExerciseDetailScreen.navigationOptions = (navigationData) => {
  const exerciseName = navigationData.navigation.getParam("exerciseName");

  return {
    headerTitle: exerciseName,
  };
};

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center" },

  setsContainer: {
    height: 80,
    width: "85%",
    backgroundColor: "white",
    marginVertical: 30,
    borderRadius: 10,
  },

  topItem: {
    marginLeft: 15,
    borderBottomWidth: 0.5,
    borderColor: Colours.accent,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },

  bottomItem: {
    marginLeft: 15,

    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },

  number: {
    alignItems: "flex-end",
    flex: 1,
    marginRight: 15,
  },
});

export default ExerciseDetailScreen;
