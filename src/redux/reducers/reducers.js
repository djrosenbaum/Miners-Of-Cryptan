import { combineReducers } from 'redux';
import layout from './layout';
import players from './players';
import settings from './settings';
import tiles from './tiles';

const reducers = combineReducers({
  layout,
  players,
  settings,
  tiles,
});

export default reducers;
