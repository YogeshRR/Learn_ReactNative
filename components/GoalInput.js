import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
function GoalInput(props) {
  const [enteredGoalText, setGoalText] = useState("");
  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setGoalText("");
  }
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder="Your Goal for the Course"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add  Goal" onPress={addGoalHandler} />
    </View>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  textInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    justifyContent: "space-between",
  },
});
