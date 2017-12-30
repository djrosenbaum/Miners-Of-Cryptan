import { combineReducers } from 'redux';

const playerReducer = (state = [], action) => {
  if (action.type === 'ADD_SETTLEMENT') {
    console.log('BEFORE STATE:', state);
    console.log('add a settlement!');
    console.log('playerIndex:', action.index);
    console.log('coordinates:', action.coordinate);

    return state.map((player, index) => {
      if (index === action.index) {
        return Object.assign({}, player, {
          settlements: [...player.settlements, action.coordinate],
        });
      }
      return player;
    });
  }
  return state;
};

const reducers = combineReducers({
  players: playerReducer,
});

export default reducers;
