import { ADD_ARTICLE } from '../constants';

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    const newState = Object.assign({}, state);
    Object.assign(newState, {articles: [...state.articles, action.payload]})
    return newState;
  }
  return state;
};

export default rootReducer;