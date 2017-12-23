const _ = require('lodash');
const { terrains } = require('../terrain/terrain.js');
const { numberTokens } = require('../numberTokens/numberTokens.js');
const { randomNumber } = require('../../helpers/randomNumber.js');

const desert = {
  probability: 0,
  terrain: 'desert'
};

const terrainTiles = _.pull(terrains.tiles.slice(), 'desert');

function buildGameTile(numberToken, index) {
  const numberTokenCopy = Object.assign({}, numberToken);
  numberTokenCopy.terrain = terrainTiles[index];
  return numberTokenCopy;
}

function generateGameTiles() {
  const getRandomNumber = randomNumber(0, numberTokens.length - 1);
  const gameTiles = numberTokens.map(buildGameTile);
  gameTiles.splice(getRandomNumber, 0, desert);
  return gameTiles;
}

const gameTiles = generateGameTiles();

module.exports = {
  gameTiles
};
