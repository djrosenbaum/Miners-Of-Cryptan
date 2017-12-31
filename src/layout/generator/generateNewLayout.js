import _ from 'lodash';
import game from '../../game/game';
import generateGrid from './generateGrid';
import generateCenterPoints from './generateCenterPoints';
import generateHexPoints from './generateHexPoints';

function generateNewLayout() {
  return new Promise((resolve) => {
    const grid = generateGrid(5, 5);
    const centerPoints = generateCenterPoints(grid);
    const hexPoints = generateHexPoints(centerPoints);

    const layout = {};
    layout.hexagons = grid.map((coordinate, index) => (
      {
        coordinate: grid[index],
        centerPoint: centerPoints[index],
        points: hexPoints[index],
      }));

    _.merge(game, { layout });

    resolve();
  });
}

export default generateNewLayout;
