import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

import { WORKOUTS } from "../../data/dummy-data";
import WorkoutGridTile from "../../components/WorkoutGridTile";
import Colours from "../../constants/colours";

const RoutinesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <WorkoutGridTile
        title={itemData.item.title}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "WorkoutDetail",
            params: {
              workoutId: itemData.item.id,
              exercises: itemData.item.exercises,
            },
          })
        }
      />
    );
  };
  return (
    <FlatList
      data={WORKOUTS}
      renderItem={renderGridItem}
      numColumns={1}
      style={styles.list}
    />
  );
};

RoutinesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Saved Routines",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Edit" />
        </HeaderButtons>
      );
    },
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Add" iconName="md-add" />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  text: {
    color: Colours.primary,
  },

  list: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default RoutinesScreen;
