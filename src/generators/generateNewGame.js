const { generateGameTiles } = require('./generateGameTiles.js');
const { generatePlayers } = require('./generatePlayers.js');

function generateNewGame(settings) {
  return new Promise(function newGame(resolve) {
    const gameBoard = {
      gameTiles: generateGameTiles(),
      players: generatePlayers(settings.players)
    };

    resolve(gameBoard);
  });
}

module.exports = {
  generateNewGame
};
