import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './src/components/AppBar';
import CirclButton from './src/components/CircleButton';
import MemoList from './src/components/MemoList';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CirclButton>+</CirclButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
