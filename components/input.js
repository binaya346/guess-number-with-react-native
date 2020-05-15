import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    fontSize: 16,
  },
});

export default Input;
