const _ = require('lodash');
const { player } = require('../components/player.js');
const { availableColors } = require('../components/availableColors.js');

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

  return _.shuffle(_.times(settings.totalPlayers, function loopPlayer(index) {
    return player({
      type: setPlayerType(index),
      color: setPlayerColor(colors, settings, index)
    });
  }));
}

// console.log(generatePlayers({
//   color: 'orange',
//   totalPlayers: 3
// }));

module.exports = {
  generatePlayers
};
