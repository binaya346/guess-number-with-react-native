import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View {...props} style={{ ...styles.card, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 8,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});

export default Card;
