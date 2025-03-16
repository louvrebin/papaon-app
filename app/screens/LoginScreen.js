import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { isValidEmail } from "@utils/validation";
import CustomButton from "../../components/CustomButton";


const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const auth = getAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("오류", "이메일과 비밀번호를 입력해주세요.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace("Home"); // 로그인 성공 시 홈 화면으로 이동
    } catch (error) {
      Alert.alert("로그인 실패", error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>로그인</Text>

      <TextInput
        placeholder="이메일 입력"
        value={email}
        onChangeText={setEmail}
        style={{ width: "100%", borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 5, marginBottom: 10 }}
      />
      <TextInput
        placeholder="비밀번호 입력"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ width: "100%", borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 5, marginBottom: 10 }}
      />

      <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: "#007bff", padding: 10, borderRadius: 5, alignItems: "center", width: "100%" }}>
        <Text style={{ color: "white" }}>로그인</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={{ color: "blue", marginTop: 10 }}>비밀번호를 잊으셨나요?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("GoogleSignIn")} style={{ marginTop: 20 }}>
        <Text style={{ color: "green" }}>Google 로그인</Text>
      </TouchableOpacity>
    </View>
  );
};

const inputStyle = {
  width: "100%",
  borderWidth: 1,
  borderColor: "#ccc",
  padding: 10,
  borderRadius: 5,
  marginBottom: 10,
};

const buttonStyle = {
  backgroundColor: "#007bff",
  padding: 10,
  borderRadius: 5,
  alignItems: "center",
  width: "100%",
};

export default LoginScreen;
