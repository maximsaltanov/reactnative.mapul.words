import { TRANSLATE_CARD, NEXT_CARD } from '../actions/types';
import cards from '../storage/cards';

const initialState = {
    textSource: cards[0].s, 
    textDest: cards[0].d,
    isShowTranslate: false,
    isShowButtonsContainer: false,
    cards: cards,
    cardIndex: 0
};

const cardReducer = (state = initialState, action) => {
    
  console.log('action', action);

  switch(action.type) {        
    case TRANSLATE_CARD:
      return {
        ...state,
        isShowTranslate: action.isShowTranslate,
        isShowButtonsContainer: action.isShowButtonsContainer
      };
    case NEXT_CARD:
      if (state.cardIndex < state.cards.length - 1){

        var cards = state.cards;

        if (action.rate == 1 || action.rate == 2) cards.push(cards[state.cardIndex]);

        return {
          ...state,
          cards: cards,
          isShowTranslate: false,
          isShowButtonsContainer: false,
          cardIndex: state.cardIndex + 1,
          textSource: state.cards[state.cardIndex + 1].s,
          textDest: state.cards[state.cardIndex + 1].d
        };      
      }
      else return {
        ...state,
        isShowTranslate: true,
        isShowButtonsContainer: false,
        cardIndex: -1,
        textSource: 'All cards completed!!!',
        textDest: ''
      };      
      
    default:
      return state;
  }
}

export default cardReducer;