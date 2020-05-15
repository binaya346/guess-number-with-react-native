import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.header}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrapper: {
    width: "100%",
    height: 90,
    padding: 36,
    backgroundColor: "#f7287b",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "#000",
    fontSize: 18,
  },
});
