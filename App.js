
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.textInputContainer}>
        <TextInput placeholder='Your Goal for the Course' style={styles.textInput}/>
        <Button title='Add  Goal'/>
      </View>
      <View style={styles.goalContainer}>
        <Text>List of Your Goals...</Text>
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
