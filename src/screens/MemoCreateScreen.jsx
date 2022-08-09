import React from 'react';
import { View, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView'; // 自作のKeyboardAvoidingViewのコンポーネント

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  function handlePress() {
    const db = firebase.firestore();
    const ref = db.collection('memos');
    ref
      .add({
        bodyText: 'Hello',
      })
      .then((docRef) => {
        console.log('create', docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log('err', error);
      });
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton name="check" onPress={handlePress} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
