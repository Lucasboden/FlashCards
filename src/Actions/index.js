export const NEW_DECK = 'NEW_DECK';
export const NEW_CARD = 'NEW_CARD';
export const FETCH_DECKS = 'FETCH_DECKS';

export const newDeck = (id, name) => ({
  type: NEW_DECK,
  id,
  name
});

export const newCard = (deckId, question, answer) => ({
  type: NEW_CARD,
  deckId,
  question,
  answer
});

export const fetchDecks = decks => ({
  type: FETCH_DECKS,
  decks
});