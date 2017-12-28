const { roundToNearest } = require('../../helpers/roundToNearest.js');

function pointX(x, theta, radius) {
  const point = x + (radius * Math.sin(theta));
  return roundToNearest(point, 100);
}

function pointY(y, theta, radius) {
  const point = y + (radius * Math.cos(theta));
  return roundToNearest(point, 100);
}

function generateHexPoints(centerPoints) {
  const radius = 30;

  return centerPoints.map((coordinate) => {
    const [x, y] = coordinate;
    const hexPoints = [];

    for (let theta = 0; theta < Math.PI * 2; theta += Math.PI / 3) {
      hexPoints.push([pointX(x, theta, radius), pointY(y, theta, radius)]);
    }

    return hexPoints;
  });
}

module.exports = {
  generateHexPoints,
};
