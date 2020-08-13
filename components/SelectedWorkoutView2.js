import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  FlatList,
  SectionList,
  ImagePropTypes,
} from "react-native";

import Colours from "../constants/colours";
import { WORKOUTS } from "../data/dummy-data";
import TextWithArrow from "./routines/TextWithArrow";

const ListItem = (props) => {
  let borderBottomWidth;
  if (props.index === props.workoutLength - 1) {
    borderBottomWidth = 0;
  } else {
    borderBottomWidth = 0.5;
  }
  const newStyle = StyleSheet.create({
    border: {
      borderBottomWidth: borderBottomWidth,
    },
  });

  return (
    <TouchableOpacity
      style={{ ...styles.listItem, ...newStyle.border }}
      onPress={() => {
        props.navigation.navigate({
          routeName: "ExerciseDetail",
          params: {
            exerciseSets: props.sets,
            exerciseName: props.children,
          },
        });
      }}
    >
      <TextWithArrow sets={props.sets}>{props.children}</TextWithArrow>
    </TouchableOpacity>
  );
};

const SelectedWorkoutView = (props) => {
  const workoutId = props.navigation.getParam("workoutId");
  selectedWorkout = WORKOUTS.find((workout) => workout.id === workoutId);

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scroll}>
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

        <View style={styles.exercisesContainer}>
          {selectedWorkout.exercises.map((exercise, index) => (
            <ListItem
              key={index}
              workoutLength={selectedWorkout.exercises.length}
              sets={selectedWorkout.sets[index]}
              index={index}
              navigation={props.navigation}
            >
              {exercise}
            </ListItem>
          ))}
        </View>

        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startText}>Add Exercise</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colours.scrollBackground,
  },

  scroll: {
    flexGrow: 1,
    backgroundColor: "transparent",
    flexGrow: 1,
    alignItems: "center",
  },

  exercisesContainer: {
    width: "85%",
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: "white",
    shadowRadius: 1,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0.3 },
  },

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
    borderColor: Colours.accent,
    borderBottomWidth: 2,
    height: 60,
    marginLeft: 15,
    justifyContent: "center",
  },
});

export default SelectedWorkoutView;
