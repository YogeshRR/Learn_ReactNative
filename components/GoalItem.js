import { StyleSheet, View, Text } from "react-native";

function GoalItem({ text }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text} </Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    color: "white",
    fontSize: 12,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
    height: 45,
  },

  goalText: {
    color: "white",
  },
});