import { ADD_ARTICLE, DATA_LOADED } from '../constants';

const initialState = {
  articles: [],
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    const newState = Object.assign({}, state);
    Object.assign(newState, {articles: [...state.articles, action.payload]})
    return newState;
  }

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }

  return state;
};

export default rootReducer;