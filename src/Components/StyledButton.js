import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { green, white } from "../Utils/colors";

const StyledButton = ({ children, onPress, style = {} }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={[styles.reset, style]}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: green,
    margin: 10,
    padding: 15,
    width: 300
  },
  reset: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: white
  }
});

export default StyledButton;