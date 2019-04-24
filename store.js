
import { createStore, combineReducers } from 'redux';
import cardReducer from './reducers/cardReducer';

// const rootReducer = combineReducers({
//   cards: cardReducer
// });

const configureStore = () => {
  return createStore(cardReducer);
}

export default configureStore;