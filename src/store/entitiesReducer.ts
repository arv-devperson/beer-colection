import { combineReducers } from 'redux';
import beersReducer from './beersStore';

export default combineReducers({
  beers: beersReducer
});
