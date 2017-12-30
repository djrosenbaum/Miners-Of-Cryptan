import _ from 'lodash';
import player from '../components/player';
import availableColors from '../components/availableColors';

function setPlayerType(index) {
  if (index === 0) {
    return 'human';
  }
  return 'ai';
}

function setPlayerColor(colors, settings, index) {
  if (index === 0) {
    _.pull(colors, settings.color);
    return settings.color;
  }
  return colors.shift();
}

function generatePlayers(settings) {
  const colors = _.shuffle(availableColors());

  return _.shuffle(_.times(settings.totalPlayers, index => (player({
    type: setPlayerType(index),
    color: setPlayerColor(colors, settings, index),
  }))));
}

export default generatePlayers;
