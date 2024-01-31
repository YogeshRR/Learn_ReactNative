import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Another Text</Text>
      <Text style={styles.dummyText} >On Two Device</Text>
      <Button title='Tap Here' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText : {
    margin : 15,
    borderColor : 'blue',
    borderWidth : 2,
    padding : 15,
  },
});
