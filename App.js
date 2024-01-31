
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler (enteredText) {
   // console.log(enteredText);
    setGoalText(enteredText);
  }
  function addGoalHandler () {
    setCourseGoals(currentGoal => [...currentGoal, enteredGoalText]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.textInputContainer}>
        <TextInput placeholder='Your Goal for the Course' style={styles.textInput} onChangeText={goalInputHandler}/>
        <Button title='Add  Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalContainer}>
       {courseGoals.map((goal)=> <Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer : {
    flex : 1,
    padding : 50,
    paddingHorizontal : 20,
  },
  textInputContainer : {
    flex : 1,
    flexDirection : 'row',
    alignItems : 'center',
    marginBottom : 20,
    borderBottomWidth : 1,
    borderBottomColor : '#cccccc',
    justifyContent : 'space-between',
  },
  textInput : {
    borderWidth : 1,
    borderColor : '#cccccc',
    width : '70%',
    marginRight : 8,
    padding : 8,
  },

  goalContainer : {
    flex : 5,
  }

});
