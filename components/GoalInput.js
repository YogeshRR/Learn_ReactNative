import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Your Goal for the Course"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add  Goal" onPress={addGoalHandler} />
          </View>

          <View style={styles.button}>
            <Button title="Cancel" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginBottom: 20,
    padding: 8,
  },
  textInputContainer: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: "20",
  },
  button: {
    width: 100,
    justifyContent: "space-between",
    margin: 10,
  },
});
