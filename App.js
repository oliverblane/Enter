import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import Footer from "./components/Footer";
import RoutinesScreen from "./screens/tabs/RoutinesScreen";
import HistoryScreen from "./screens/tabs/HistoryScreen";
import StatsScreen from "./screens/tabs/StatsScreen";
import SettingsScreen from "./screens/tabs/SettingsScreen";
import { Logs } from "expo";

import MainNavigator from "./navigation/ScreensNavigator";

enableScreens();

export default function App() {
  return (
    <View style={styles.screen}>
      <MainNavigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
