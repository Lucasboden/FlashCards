import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { View, StatusBar } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { Feather } from "@expo/vector-icons";
import { Constants } from "expo";
import { white, purple, gray } from "./src/Utils/colors";
import { setLocalNotification } from "./src/Utils/helpers";

import reducer from "./src/Reducers";
import ListDecks from "./src/Views/ListDecks";
import AddDeck from "./src/Views/AddDeck";
import AddCard from "./src/Views/AddCard";
import Deck from "./src/Views/Deck";
import Quiz from "./src/Views/Quiz";

const FlashcardsStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: ListDecks,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <Feather name="list" size={30} color={tintColor} />
        )
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: "New Deck",
        tabBarIcon: ({ tintColor }) => (
          <Feather name="plus" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: purple,
      style: {
        height: 60,
        backgroundColor: white,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      },
      labelStyle: {
        paddingTop: 3,
        fontSize: 14,
        fontWeight: "bold"
      }
    }
  }
);

const MainNavigator = createStackNavigator(
  {
    Home: Tabs,
    DeckDetail: Deck,
    AddCard: AddCard,
    Quiz: Quiz
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTintColor: white,
      headerStyle: { backgroundColor: purple },
      headerTitleStyle: { fontWeight: "bold" }
    }
  }
);

const AppNav = createAppContainer(MainNavigator)

class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <FlashcardsStatusBar
            backgroundColor={purple}
            barStyle="light-content"
          />
          <AppNav />
        </View>
      </Provider>
    );
  }
}

export default App;