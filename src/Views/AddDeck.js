import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import StyledButton from "../Components/StyledButton";
import { newDeck } from "../Actions";
import { saveDeck } from "../Utils/API";
import { generateId } from "../Utils/helpers";
import { white, gray } from "../Utils/colors";

class AddDeck extends Component {
  state = {
    input: ""
  };

  _newDeckObject = () => ({
    id: generateId(),
    name: this.state.input,
    cards: []
  })

  handleInputChange = input => {
    this.setState(() => ({
      input
    }));
  };

  handleSubmit = () => {
    deck = this._newDeckObject();
    this.props.newDeck(deck.id, deck.name); // Add to redux
    saveDeck(deck); // Persist to AsyncStorage

    // Route to new deck's detail view.
    this.props.navigation.navigate("DeckDetail", {
      deckId: deck.id,
      name: deck.name
    });

    // Reset input for future use.
    this.setState(() => ({
      input: ""
    }));
  };

  render() {
    const { input } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.label}>What will you learn in this deck?</Text>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={this.handleInputChange}
        />
        <StyledButton onPress={this.handleSubmit}>
          <Text>Create Deck</Text>
        </StyledButton>        
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  input: {
    backgroundColor: white,
    width: 350,
    fontSize: 20,
    height: 50,
    padding: 10,
    borderRadius: 1,
    borderColor: gray,
    margin: 20
  }  
});

const mapDispatchToProps = dispatch => ({
  newDeck: (id, deckName) => dispatch(newDeck(id, deckName))
});

export default connect(
  null,
  mapDispatchToProps
)(AddDeck);