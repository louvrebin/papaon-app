import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";


const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert("오류", "이메일을 입력해주세요.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("성공", "비밀번호 재설정 이메일을 보냈습니다.");
    } catch (error) {
      Alert.alert("오류", error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>비밀번호 재설정</Text>

      <TextInput
        placeholder="이메일을 입력하세요"
        value={email}
        onChangeText={setEmail}
        style={inputStyle}
      />

      <TouchableOpacity onPress={handleResetPassword} style={buttonStyle}>
        <Text style={{ color: "white" }}>비밀번호 재설정</Text>
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

export default ForgotPasswordScreen;
