import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const WorkoutHeader = (props) => {
    return (<TouchableOpacity style={styles.startButton}>
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
      </View>)
}