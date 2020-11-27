import { combineReducers } from 'redux';
import beersReducer from './beersStore';
import uiReducer from './uiStore';

export default combineReducers({
  beers: beersReducer,
  ui: uiReducer
});
