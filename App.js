import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Makanan</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Nasi Goreng adalah makanan yang berupa nasi yang digoreng dan dicampur dalam minyak goreng')}
      >
        <Text style={styles.buttonText}>Nasi Goreng</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Bakso adalah makanan Indonesia')}
      >
        <Text style={styles.buttonText}>Bakso</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('seblak adalah makanan terenak bagi saya')}
      >
        <Text style={styles.buttonText}>Seblak</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default ButtonApp;