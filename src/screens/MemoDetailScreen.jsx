import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import AppBar from '../components/AppBar';
import CirclButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View>
      <AppBar />
      <View>
        <Text>買い物リスト</Text>
        <Text>2022年</Text>
      </View>
      <ScrollView>
        <Text>
          買い物リスト ああああああああああああああああああああああああああああああああ
          ああああああああああああああああああああああああああああああああ ああああああああ
        </Text>
      </ScrollView>
      <CirclButton>+</CirclButton>
    </View>
  );
}
