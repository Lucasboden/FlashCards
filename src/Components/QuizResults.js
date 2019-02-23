import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { purple, white, gray } from "../Utils/colors";
import StyledButton from "./StyledButton";

const QuizResuts = ({
  correctAnswerCount,
  incorrectAnswerCount,
  restartQuiz,
  navigation
}) => (
  <View style={styles.container}>
    <Text style={styles.header}>You scored</Text>
    <Text style={styles.result}>{`${Math.round(
      (correctAnswerCount * 100) / (correctAnswerCount + incorrectAnswerCount)
    )} %`}</Text>
    <View style={styles.actions}>
      <StyledButton onPress={() => restartQuiz()}>Restart Quiz</StyledButton>
      <StyledButton
        onPress={() => navigation.goBack()}
        style={{ backgroundColor: gray }}
      >
        Back to Deck
      </StyledButton>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: white
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  result: {
    fontSize: 70,
    color: purple,
    textAlign: "center"
  },
  actions: {
    marginTop: 50
  }
});

export default QuizResuts;