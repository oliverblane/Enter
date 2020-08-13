import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SettingsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 30,
  },
});

export default SettingsScreen;
