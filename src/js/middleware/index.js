import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants";

const forbinnedWords = ["spam", "money"];


export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {

      if (action.type === ADD_ARTICLE) {
        const foundWord = forbinnedWords.filter(word =>
          action.payload.title.toLowerCase().includes(word)
        );
        
        if (foundWord.length) {
          return dispatch({ type: FOUND_BAD_WORD });
        }
      }

      return next(action);
    }
  }
}