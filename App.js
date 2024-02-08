import { useState } from "react";
import { StyleSheet, View, FlatList, Button, StatusBar } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function visibleModalHandler() {
    setVisibleModal(true);
  }

  function handleVisibleModal() {
    setVisibleModal(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentGoal) => [
      ...currentGoal,
      { myText: enteredGoalText, id: Math.random.toString() },
    ]);
    handleVisibleModal();
  }

  function deleteHandler(id) {
    console.log("Delete clicked");
    setCourseGoals((currentGoal) => {
      return currentGoal.filter((goal) => goal.id == id);
    });
  }

  return (
    <>
      <StatusBar />
      <View style={styles.appContainer}>
        <Button
          onPress={visibleModalHandler}
          title="Add New Goal"
          color="#dddddd"
        />
        <GoalInput
          visible={visibleModal}
          onAddGoal={addGoalHandler}
          onCancel={handleVisibleModal}
        />
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.myText}
                  onDelete={deleteHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 20,
  },

  goalContainer: {
    flex: 5,
  },
});
