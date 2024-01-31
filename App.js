
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='Your Goal for the Course'/>
        <Button title='Add here Your Goal'/>
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
  }
});
