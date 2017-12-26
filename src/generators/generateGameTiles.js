const _ = require('lodash');
const { terrains } = require('../components/terrains.js');
const { numberTokens } = require('../components/numberTokens.js');
// const { randomNumber } = require('../helpers/randomNumber.js');
const { tileGrid } = require('../layout/tileGrid.js');

let state = {};

function buildGameTile(numberToken, index) {
  const gameTile = {
    terrain: state.terrains[index],
    grid: state.tileGrid[index]
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

module.exports = {
  generateGameTiles
};
