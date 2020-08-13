import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

import { WORKOUTS } from "../../data/dummy-data";
import Colours from "../../constants/colours";
import colours from "../../constants/colours";
import SelectedWorkoutView from "../../components/SelectedWorkoutView2";

const WorkoutDetailScreen = (props) => {
  return <SelectedWorkoutView navigation={props.navigation} />;
};

WorkoutDetailScreen.navigationOptions = (navigationData) => {
  const workoutId = navigationData.navigation.getParam("workoutId");

  const selectedWorkout = WORKOUTS.find((workout) => workout.id === workoutId);

  return {
    headerTitle: selectedWorkout.title,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Edit" />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({});

export default WorkoutDetailScreen;
