import React, { useState } from 'react';
import { StyleSheet, View, Button, SafeAreaView } from 'react-native';

const App = () => {
  const [bgColor, setBgColor] = useState('green'); // Initial background color

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.parentContainer, { backgroundColor: bgColor }]}>
        <View style={styles.buttonContainer}>
          <Button title="GREEN" color="green" onPress={() => setBgColor('green')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="BLUE" color="blue" onPress={() => setBgColor('blue')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="BROWN" color="brown" onPress={() => setBgColor('brown')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="YELLOW" color="yellow" onPress={() => setBgColor('yellow')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="RED" color="red" onPress={() => setBgColor('red')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="BLACK" color="black" onPress={() => setBgColor('black')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parentContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  buttonContainer: {
    marginVertical: 10, // Increased vertical spacing between buttons
  },
});

export default App;
