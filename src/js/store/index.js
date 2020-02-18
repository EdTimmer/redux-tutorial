import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { forbiddenWordsMiddleware } from '../middleware';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(forbiddenWordsMiddleware, thunk)  
);

export default store;