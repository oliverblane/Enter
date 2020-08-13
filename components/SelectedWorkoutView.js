import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  FlatList,
} from "react-native";

import Colours from "../constants/colours";
import { WORKOUTS } from "../data/dummy-data";

const headerStuff = (props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startText}>Start workout</Text>
      </TouchableOpacity>

      <View style={styles.detailsBlock}>
        <TouchableOpacity style={styles.detailsBlockItem}>
          <Text style={{ fontSize: 18 }}>Workout Title</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.detailsBlockItem}>
          <Text style={{ fontSize: 18 }}>Targets</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", marginLeft: 15 }}
        >
          <Text style={{ fontSize: 18 }}>Notes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SelectedWorkoutView = (props) => {
  const workoutId = props.navigation.getParam("workoutId");
  selectedWorkout = WORKOUTS.find((workout) => workout.id === workoutId);
  const workoutLength = selectedWorkout.exercises.length;
  const renderExerciseItem = (itemData) => {
    if (itemData.index === 0) {
      return (
        <View style={styles.topListItem}>
          <Text>{itemData.item}</Text>
        </View>
      );
    } else if (itemData.index === workoutLength - 1) {
      return (
        <View style={styles.bottomListItem}>
          <Text>{itemData.item}</Text>
        </View>
      );
    }

    return (
      <View style={styles.listItem}>
        <Text>{itemData.item}</Text>
      </View>
    );
  };
  return (
    <ScrollView>
      <View>
        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{
            backgroundColor: Colours.scrollBackground,
            flexGrow: 1,
          }}
          ListHeaderComponent={headerStuff}
          data={selectedWorkout.exercises}
          renderItem={renderExerciseItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexGrow: 1,
    backgroundColor: Colours.scrollBackground,
  },

  screen: {
    flex: 1,
    backgroundColor: Colours.scrollBackground,
  },

  // scroll: {
  //   flex: 1,
  //   backgroundColor: "transparent",
  //   flexGrow: 1,
  //   alignItems: "center",
  // },

  startButton: {
    width: "85%",
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: 20,
    shadowColor: "black",
    shadowRadius: 1,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0.3 },
  },

  startText: {
    fontSize: 20,
    marginLeft: 15,
    color: Colours.primary,
    textAlign: "center",
  },

  detailsBlock: {
    marginTop: 20,
    height: 120,
    backgroundColor: "white",
    width: "85%",
    borderRadius: 10,
    shadowRadius: 1,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0.3 },
  },

  detailsBlockItem: {
    borderBottomColor: Colours.accent,
    borderLeftColor: "white",
    borderTopColor: Colours.accent,
    borderBottomWidth: 0.5,
    height: 40,
    justifyContent: "center",
    marginLeft: 15,
  },

  listItem: {
    borderColor: "black",
    borderWidth: 2,
    height: 40,
    width: "85%",
  },

  topListItem: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 2,
    height: 40,
    width: "85%",
  },

  bottomListItem: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 2,
    height: 40,
    width: "85%",
  },
});

export default SelectedWorkoutView;
