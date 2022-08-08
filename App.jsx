import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: 'AIzaSyBoFTOjdLR-bfwmXXY0dICvgvpWHM0mjjE',
  authDomain: 'memoapp-73f4d.firebaseapp.com',
  projectId: 'memoapp-73f4d',
  storageBucket: 'memoapp-73f4d.appspot.com',
  messagingSenderId: '1052368613782',
  appId: '1:1052368613782:web:4e3fa4321a41d9f6f0edb7',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{
          headerStyle: { backgroundColor: '#467FD3' },
          headerTitleStyle: { color: '#ffffff' },
          headerTitle: 'Memo App',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
