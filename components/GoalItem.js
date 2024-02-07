import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDelete}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text} </Text>
      </View>
    </Pressable>
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
