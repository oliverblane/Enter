import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import NavButton from "./NavButton";
import Colours from "../constants/colours";

const Footer = (props) => {
  const highlightHandler = (screenName) => {
    if (screenName === props.highlight) {
      return Colours.primary;
    } else {
      return Colours.accent;
    }
  };

  const colSheet = {
    routines: highlightHandler("routines"),
    history: highlightHandler("history"),
    stats: highlightHandler("stats"),
    settings: highlightHandler("settings"),
  };

  return (
    <View style={styles.footer}>
      <NavButton
        title="Routines"
        style={{ color: colSheet.routines }}
        onPress={props.onSwitchScreen.bind(this, "routines")}
      >
        <FontAwesome name="book" size={24} color={colSheet.routines} />
      </NavButton>

      <NavButton
        title="History"
        style={{ color: colSheet.history }}
        onPress={props.onSwitchScreen.bind(this, "history")}
      >
        <FontAwesome name="history" size={24} color={colSheet.history} />
      </NavButton>

      <NavButton
        title="Stats"
        style={{ color: colSheet.stats }}
        onPress={props.onSwitchScreen.bind(this, "stats")}
      >
        <FontAwesome name="bar-chart" size={24} color={colSheet.stats} />
      </NavButton>

      <NavButton
        title="Settings"
        style={{ color: colSheet.settings }}
        onPress={props.onSwitchScreen.bind(this, "settings")}
      >
        <Ionicons name="ios-settings" size={24} color={colSheet.settings} />
      </NavButton>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    width: "100%",
    height: 55,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
  },

  footerText: {
    color: "white",
  },
});

export default Footer;
