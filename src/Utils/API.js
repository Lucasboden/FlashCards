import { AsyncStorage } from "react-native";

export const FLASHCARD_STORAGE_KEY = "Udacity:FlashCards";

let decks={
	Redbull: {
		title: 'RedBull',
		questions: 
		[
			{
				question: 'What is RedBull?',
				answer: 'An energy drink.'
			},
			{
				question: 'Does it give you wings?',
				answer: 'Yes'
			}
		]
	},
	Lays :{
		title: 'Lays',
		questions:
		[	
			{
				question:'Is there a Sour Cream flavor?',
				answer:'Yes, it is delicious'
			}
		]
	}
}


export const fetchDecks = () => {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    return data;
  });
};

export const saveDeck = deck => {
  return AsyncStorage.mergeItem(
    FLASHCARD_STORAGE_KEY,
    JSON.stringify({ [deck.id]: deck })
  );
};

export const saveCard = (deckId, card) => {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[deckId] = {
      ...data[deckId],
      cards: [
        ...data[deckId].cards,
        { question: card.question, answer: card.answer }
      ]
    };
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
  });
};