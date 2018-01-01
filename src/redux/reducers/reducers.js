import { combineReducers } from 'redux';
import players from './players';
import tiles from './tiles';
import layout from './layout';

const reducers = combineReducers({
  players,
  tiles,
  layout,
});

export default reducers;
