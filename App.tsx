import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';

export default function App() {
  const colorScheme = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={colorScheme ? styles.lightText : styles.darkText}>
        App is in{' '}
        <Text style={styles.scheme}>{colorScheme ? 'Dark' : 'Light'}</Text> mode
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  lightText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
  scheme: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
