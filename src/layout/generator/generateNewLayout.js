const _ = require('lodash');
const { generateGrid } = require('./generateGrid.js');
const { generateCenterPoints } = require('./generateCenterPoints.js');
const { generateHexPoints } = require('./generateHexPoints.js');

function generateNewLayout(gameboard) {
  return new Promise((resolve) => {
    const grid = generateGrid(5, 5);
    const centerPoints = generateCenterPoints(grid);
    const hexPoints = generateHexPoints(centerPoints);

    const hexagons = grid.map((coordinate, index) => (
      {
        coordinate: grid[index],
        centerPoint: centerPoints[index],
        points: hexPoints[index],
      }));

    resolve(_.merge(gameboard, {
      layout: {
        hexagons,
      },
    }));
  });
}

module.exports = {
  generateNewLayout,
};
