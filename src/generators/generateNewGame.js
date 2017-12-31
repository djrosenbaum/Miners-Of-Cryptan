import game from '../game/game';
import generateGameTiles from './generateGameTiles';
import generatePlayers from './generatePlayers';
import generateRules from './generateRules';

function generateNewGame(settings) {
  return new Promise((resolve) => {
    game.settings = settings;
    game.gameTiles = generateGameTiles();
    game.players = generatePlayers(settings.players);
    game.rules = generateRules();

    resolve(game);
  });
}

export default generateNewGame;
