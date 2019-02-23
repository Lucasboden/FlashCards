import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import StyledButton from "./StyledButton";
import { blue, white, gray } from "../Utils/colors";

class QuizCard extends Component {
  state = {
    showQuestion: true
  };

  toggleQuestion = () => {
    this.setState(state => ({
      showQuestion: !state.showQuestion
    }));
  };

  render() {
    const { showQuestion } = this.state;
    const { card } = this.props;
    return (
      <View style={styles.container}>
        <View>
          {this.state.showQuestion ? (
            <Text style={styles.text}>{card.question}</Text>
          ) : (
            <Text style={styles.text}>{card.answer}</Text>
          )}
        </View>
        <View style={{ marginTop: 30 }}>
          <StyledButton
            style={{ backgroundColor: gray }}
            onPress={this.toggleQuestion}
          >{`See ${showQuestion ? "Answer" : "Question"}`}</StyledButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: blue,
    padding: 30,
    width: 350,
    height: 250,
    borderRadius: 5,
    shadowRadius: 5,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 4,
      height: 5
    }
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: white
  }
});

export default QuizCard;