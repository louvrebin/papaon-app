// app/screens/GoogleSignInScreen.js

import React, { useEffect } from 'react';
import { View, Button, Text, ActivityIndicator } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { getAuth, signInWithCredential, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';

WebBrowser.maybeCompleteAuthSession();

export default function GoogleSignInScreen({ navigation }) {
  // 클라이언트 ID들은 위에서 기록한 값을 사용
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: 'YOUR_EXPO_CLIENT_ID',      // Expo 앱용 클라이언트 ID
    iosClientId: 'YOUR_IOS_CLIENT_ID',        // iOS용 클라이언트 ID
    androidClientId: 'YOUR_ANDROID_CLIENT_ID',// Android용 클라이언트 ID
    webClientId: '104258055139-2ktpo97arbknh5n6kisbr47nkvqt4hpp.apps.googleusercontent.com',        // 웹용 클라이언트 ID (Firebase 콘솔의 Web 설정 참고)
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.authentication;
      // Firebase에서 Google 인증 credential 생성
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((result) => {
          console.log('Google Sign In successful!', result.user);
          // 로그인 성공 후 홈 화면으로 이동
          navigation.replace('Home');
        })
        .catch((error) => {
          console.error('Google Sign In error: ', error);
        });
    }
  }, [response]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Google Sign-In</Text>
      {request ? (
        <Button
          title="Sign in with Google"
          onPress={() => {
            promptAsync();
          }}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
}
