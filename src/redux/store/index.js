import { createStore } from 'redux';
import game from '../../game/game';
import reducers from '../reducers/reducers';

game.store = createStore(
  reducers,
  {},
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default game.store;
