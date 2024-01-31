
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.textInputContainer}>
        <TextInput placeholder='Your Goal for the Course' style={styles.textInput}/>
        <Button title='Add  Goal'/>
      </View>
      <View>
        <Text>List of Your Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer : {
    padding : 50,
  },
  textInputContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
  },
  textInput : {
    borderWidth : 1,
    borderColor : '#cccccc',
    width : '80%',
    marginRight : 8,
    padding : 2,

  },

});
