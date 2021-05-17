import { combineReducers } from 'redux'
import { KaliteObj, View } from '../types';

const searchReducer = (search = "", action: { type: string, payload: string }) => {
  if (action.type === 'SEARCH') {
    return action.payload;
  }
  return search;
}

const viewReducer = (view = View.HOME, action: { type: string, payload: View }) => {
  if (action.type === 'VIEW') {
    return action.payload;
  }
  return view;
}

const categoryReducer = (category = '', action: { type: string, payload: string }) => {
  if (action.type === 'CATEGORY') {
    return action.payload;
  }
  return category;
}

const resultsReducer = (results = [], action: { type: string, payload: KaliteObj[] }) => {
  if (action.type === 'RESULTS') {
    return action.payload;
  }
  return results;
}

const allReducers = combineReducers({
  search: searchReducer,
  view: viewReducer,
  category: categoryReducer,
  results: resultsReducer,
})


export default allReducers