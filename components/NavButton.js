import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colours from "../constants/colours";

const NavButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <View>{props.children}</View>
        <View>
          <Text style={{ ...styles.buttonText, ...props.style }}>
            {props.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
  },

  buttonText: {
    color: "white",
    fontSize: 12,
  },
});

export default NavButton;
