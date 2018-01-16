import { combineReducers } from 'redux';
import layout from './layout';
import players from './players';
import tiles from './tiles';

const reducers = combineReducers({
  layout,
  players,
  tiles,
});

export default reducers;
