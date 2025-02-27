import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
