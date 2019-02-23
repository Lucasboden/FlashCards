import React, { Component } from "react";
import pluralize from "pluralize";
import { connect } from "react-redux";
import { Text, View, StyleSheet } from "react-native";
import StyledButton from "../Components/StyledButton";
import { green, gray, white } from "../Utils/colors";

class Deck extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("name")
  });

  startQuiz = () => {};

  render() {
    const { navigation, deck } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>{deck.name}</Text>
          <Text style={styles.count}>{`${deck.cards.length} ${pluralize(
            "Card",
            deck.cards.length
          )}`}</Text>
        </View>
        <View style={styles.actions}>
          {deck.cards.length !== 0 && (
            <StyledButton
              onPress={() => {
                navigation.navigate("Quiz", { deck });
              }}
            >
              <Text>Start Quiz</Text>
            </StyledButton>
          )}
          <StyledButton
            style={{ backgroundColor: deck.cards.length !== 0 ? gray : green }}
            onPress={() => {
              navigation.navigate("AddCard", { deckId: deck.id });
            }}
          >
            <Text>Add Card</Text>
          </StyledButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    marginBottom: 5
  },
  count: {
    fontSize: 20,
    color: gray,
    textAlign: "center",
    marginBottom: 5
  },
  actions: {
    marginTop: 20
  }
});

const mapStateToProps = (state, { navigation }) => ({
  deck: state[navigation.getParam("deckId")]
});

export default connect(
  mapStateToProps,
  null
)(Deck);