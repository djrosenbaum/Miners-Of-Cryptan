import _ from 'lodash';
import player from '../../config/player';
import availableColors from '../../config/availableColors';

let colors;
let settings;

function setPlayerType(index) {
  if (index === 0) {
    return 'human';
  }
  return 'ai';
}

function setPlayerColor(index) {
  if (index === 0) {
    _.pull(colors, settings.color);
    return settings.color;
  }
  return colors.shift();
}

function addPlayer(index) {
  return {
    ...player,
    type: setPlayerType(index),
    color: setPlayerColor(index),
  };
}

function players(playerSettings) {
  colors = _.shuffle([...availableColors]);
  settings = playerSettings.players;
  return _.times(settings.totalPlayers, addPlayer);
}

export default players;
