import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Input from "./input";
import Card from "./card";

const GameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.card}>
        <Text style={styles.subTitle}>Select a Number</Text>
        <Input style={styles.input} keyboardType="numeric" maxLength={2} />
        <View style={styles.buttonWrapper}>
          <View style={styles.button}>
            <Button title="Reset" color="#1890ff" />
          </View>
          <View style={styles.button}>
            <Button title="confirm" color="#f7287b" />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginVertical: 10,
    fontSize: 18,
  },
  input: {
    width: 80,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 14,
  },
  card: {
    alignItems: "center",
    width: 300,
    maxWidth: "75%",
  },
  button: {
    width: "40%",
  },
  buttonWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default GameScreen;
