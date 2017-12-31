import _ from 'lodash';
import { createStore } from 'redux';
import game from '../../game/game';
import reducers from '../reducers/reducers';

function initStore() {
  return new Promise((resolve) => {
    const store = createStore(reducers, {
      players: game.players,
    });

    _.merge(game, { store });

    resolve();
  });
}

export default initStore;
