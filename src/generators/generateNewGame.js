import generateGameTiles from './generateGameTiles';
import generatePlayers from './generatePlayers';
import generateRules from './generateRules';

function generateNewGame(settings) {
  return new Promise((resolve) => {
    const gameBoard = {
      settings,
      gameTiles: generateGameTiles(),
      players: generatePlayers(settings.players),
      rules: generateRules(),
    };

    resolve(gameBoard);
  });
}

export default generateNewGame;
