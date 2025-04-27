import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function UserHomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>User Home Page</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 