import updateSettings from './UPDATE_SETTINGS';

const initialState = {
  number_of_players: 3,
  select_your_color: 'orange',
};

const settings = (state = initialState, action) => {
  if (action.type === 'UPDATE_SETTINGS') {
    return updateSettings(state, action);
  }
  return state;
};

export default settings;
