import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentGoal) => [
      ...currentGoal,
      { myText: enteredGoalText, id: Math.random.toString },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Your Goal for the Course"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add  Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.myText} </Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 20,
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
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },

  goalContainer: {
    flex: 5,
  },

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
