import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";
import Colours from "../../constants/colours";

const DATA2 = [
  {
    title: "August 2020",
    data: [
      { name: "Push 1", date: "12", day: "Tue", duration: 90 },
      { name: "Pull 1", date: "09", day: "Tue", duration: 90 },
      { name: "Legs 1", date: "07", day: "Tue", duration: 90 },
      { name: "Full Body", date: "02", day: "Tue", duration: 90 },
    ],
    //index: [0, 1, 2, 3],
  },

  {
    title: "July 2020",
    data: [
      { name: "Push 2", date: "26", day: "Tue", duration: 90 },
      { name: "Lower Body", date: "24", day: "Tue", duration: 90 },
      {
        name: "Arms and Delts",
        date: "07",
        day: "Tue",
        duration: 90,
      },
    ],
    //index: [0, 1, 2],
  },

  {
    title: "June 2020",
    data: [
      { name: "Pull 2", date: "15", day: "Tue", duration: 90 },
      { name: "Hams and Back", date: "22", day: "Tue", duration: 90 },
      {
        name: "Quads and Chest",
        date: "24",
        day: "Tue",
        duration: 90,
      },
      { name: "Arms", date: "29", day: "Tue", duration: 90 },
    ],
    //index: [0, 1, 2, 3],
  },
];

const Item = ({ itemData, index, monthlyWorkouts }) => {
  let borderColor = "white";
  if (index < monthlyWorkouts - 1) {
    borderColor = "black";
  }
  return (
    <View style={{ ...styles.item, ...{ borderColor: borderColor } }}>
      <View style={styles.date}>
        <Text style={{ color: Colours.accent, fontWeight: "500" }}>
          {itemData.day}
        </Text>
        <Text style={{ fontSize: 22, fontWeight: "700" }}>{itemData.date}</Text>
        <Text style={{ color: Colours.accent, fontWeight: "500" }}>
          {itemData.duration} min
        </Text>
      </View>
      <Text style={styles.title}>{itemData.name}</Text>
    </View>
  );
};

const HistoryScreen = (props) => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA2}
        keyExtractor={(item, index) => item + index}
        renderItem={({ section, item, index }) => {
          return (
            <Item
              itemData={item}
              index={index}
              monthlyWorkouts={section.data.length}
            />
          );
        }}
        renderSectionHeader={({ section }) => {
          return (
            <View style={styles.headerContainer}>
              <Text style={styles.header}>{section.title}</Text>
              <View style={styles.numWorkoutsContainer}>
                <Text>{section.data.length} workouts</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

HistoryScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Workout History",
  };
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  date: {
    alignItems: "center",
    marginRight: 10,
  },

  text: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    backgroundColor: "white",
    minHeight: 80,
    padding: 5,
    borderBottomWidth: 0.5,
    borderColor: Colours.accent,
    marginLeft: 20,
    flexDirection: "row",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: Colours.scrollBackground,
    height: 40,
  },

  header: {
    fontSize: 16,
    marginLeft: 10,
  },

  numWorkoutsContainer: { flex: 1, alignItems: "flex-end", marginRight: 10 },

  title: {
    fontSize: 24,
  },
});

export default HistoryScreen;
