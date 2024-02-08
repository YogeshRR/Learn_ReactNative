import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
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
        <Image
          style={styles.imageContainer}
          source={require("../components/images/goal.png")}
        />
        <TextInput
          placeholder="Your Goal for the Course"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add  Goal"
              onPress={addGoalHandler}
              color="#5e0acc"
            />
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
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    margin: 15,
    padding: 16,
  },
  textInputContainer: {
    flex: 1,
    alignItems: "center",
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
  imageContainer: {
    width: 100,
    height: 100,
  },
});
