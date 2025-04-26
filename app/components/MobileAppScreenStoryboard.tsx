import React from 'react';
import { View, StyleSheet } from 'react-native';
import MobileAppScreen from './MobileAppScreen';

export default function MobileAppScreenStoryboard() {
  return (
    <View style={styles.container}>
      <MobileAppScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
}); 