import React from "react";
import { TouchableOpacity, Text } from "react-native";

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 10, backgroundColor: "#007bff" }}>
      <Text style={{ color: "white" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
