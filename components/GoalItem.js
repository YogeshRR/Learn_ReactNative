import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDelete.bind(this, this.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text} </Text>
      </Pressable>
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

  pressedItem: {
    opacity: 0.5,
  },

  goalText: {
    color: "white",
  },
});
