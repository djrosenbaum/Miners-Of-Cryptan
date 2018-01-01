import _ from 'lodash';
import terrains from '../config/terrains';
import numberTokens from '../config/numberTokens';
import tileGrid from '../layout/tileGrid';

let state = {};

function buildGameTile(numberToken, index) {
  const gameTile = {
    terrain: state.terrains[index],
    grid: state.tileGrid[index],
  };

  if (gameTile.terrain === 'desert') {
    gameTile.robber = true;
  }

  return _.merge(numberToken, gameTile);
}

function generateGameTiles() {
  state = {};
  state.terrains = terrains();
  state.tileGrid = tileGrid();
  state.numberTokens = numberTokens();
  state.numberTokens.splice(state.terrains.indexOf('desert'), 0, {});

  return _.forEach(state.numberTokens, buildGameTile);
}

export default generateGameTiles;
