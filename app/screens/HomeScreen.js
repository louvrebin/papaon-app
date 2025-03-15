import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { getAuth, signOut } from "firebase/auth";

const HomeScreen = ({ navigation }) => {
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace("Login"); // 로그인 화면으로 이동
    } catch (error) {
      console.error("로그아웃 오류:", error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>홈 화면</Text>
      <TouchableOpacity onPress={handleLogout} style={buttonStyle}>
        <Text style={{ color: "white" }}>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
};

const buttonStyle = {
  marginTop: 20,
  backgroundColor: "#ff4444",
  padding: 10,
  borderRadius: 5,
  alignItems: "center",
};

export default HomeScreen;
