import _ from 'lodash';
import { createStore } from 'redux';
import reducers from './reducers';

function initStore(gameboard) {
  return new Promise((resolve) => {
    const store = createStore(reducers, {
      players: gameboard.players,
    });

    resolve(_.merge(gameboard, { store }));
  });
}

export default initStore;
