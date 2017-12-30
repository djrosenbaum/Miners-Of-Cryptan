import { combineReducers } from 'redux';
import playerReducer from './playerReducer';

const reducers = combineReducers({
  players: playerReducer,
});

export default reducers;
