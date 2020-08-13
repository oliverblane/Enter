import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import React from "react";

import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Colours from "../constants/colours";
import RoutinesScreen from "../screens/tabs/RoutinesScreen";
import HistoryScreen from "../screens/tabs/HistoryScreen";
import StatsScreen from "../screens/tabs/StatsScreen";
import SettingsScreen from "../screens/tabs/SettingsScreen";

import WorkoutDetailScreen from "../screens/stack/WorkoutDetailScreen";
import ExerciseDetailScreen from "../screens/stack/ExerciseDetailScreen";
import SelectedWorkoutHistoryScreen from "../screens/stack/SelectedWorkoutHistoryScreen";

// -+-+-+- THE STACK NAVIGATORS -+-+-+-

// -+-+-+- Default Options -+-+-+-
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: "white",
  },

  headerTintColor: "black",
  headerTitle: "A Screen",
};

// -+-+-+- Routines -+-+-+-
const RoutinesNavigator = createStackNavigator(
  {
    Workouts: {
      screen: RoutinesScreen,
    },
    WorkoutDetail: {
      screen: WorkoutDetailScreen,
    },
    ExerciseDetail: {
      screen: ExerciseDetailScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

// -+-+-+- History -+-+-+-
const HistoryNavigator = createStackNavigator(
  {
    History: {
      screen: HistoryScreen,
    },

    SelectedWorkout: { screen: SelectedWorkoutHistoryScreen },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

// -+-+-+- THE TAB NAVIGATORS -+-+-+-

// -+-+-+- Tab Config -+-+-+-
const tabScreenConfig = {
  Routines: {
    screen: RoutinesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <FontAwesome name="book" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colours.accent,
    },
  },
  History: {
    screen: HistoryNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <FontAwesome name="history" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colours.accent,
    },
  },

  Stats: {
    screen: StatsScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <FontAwesome name="bar-chart" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colours.accent,
    },
  },

  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-settings" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colours.accent,
    },
  },
};

// -+-+-+- Tab Navigator -+-+-+-
const ScreenTabNavigator = createBottomTabNavigator(tabScreenConfig, {
  tabBarOptions: {
    activeTintColor: Colours.primary,
  },
});

export default createAppContainer(ScreenTabNavigator);
