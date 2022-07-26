import React, { useState } from 'react';
import { View, StyleSheet, TextInput, KeyboardAvoidingView, Alert } from 'react-native'; //KeyboardAvoidingViewのバグ修正され次第KeyboardSafeViewをKeyboardAvoidingViewで置き換える。
import { shape, string } from 'prop-types';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView'; // 自作のKeyboardAvoidingViewのコンポーネント
import { translateErrors } from '../utils';

export default function MemoEditScreen(props) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;

  const [body, setBody] = useState(bodyText);

  const handlePress = () => {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      ref
        .set(
          {
            bodyText: body,
            updatedAt: new Date(),
          },
          { merge: true }
        )
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          const errorMsg = translateErrors(error.code);
          /*メモ更新に失敗した際のエラーメッセージ
          今回は英語の翻訳がたくさんある為省略するが、本来はranslateErrors()のswich文に
          firebaseのエラーコードを翻訳して同様の処理をする。
          今回はデフォルトメッセージを使う。
          参考↓
          https://firebase.google.com/docs/reference/node/firebase.firestore#firestoreerrorcode */
          Alert.alert(errorMsg.title, errorMsg.description);
        });
    }
  };

  return (
    <KeyboardSafeView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput
          value={body}
          multiline
          style={styles.input}
          onChangeText={(text) => {
            setBody(text);
          }}
        />
      </View>
      <CircleButton name="check" onPress={handlePress} />
    </KeyboardSafeView>
  );
}

MemoEditScreen.propTypes = {
  route: shape({
    params: shape({
      id: string,
      bodyText: string,
    }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 27,
  },
});
