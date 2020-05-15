import React, { useState } from "react";
import { useKeepAwake } from "expo-keep-awake";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./components/gameScreen";

const App = () => {
  useKeepAwake();
  return (
    <View style={styles.screen}>
      <Header title="Guess the number" />
      <GameScreen />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
