import game from '../../game/game';
import generateGrid from './generateGrid';
import generateCenterPoints from './generateCenterPoints';
import generateHexPoints from './generateHexPoints';

function generateNewLayout() {
  return new Promise((resolve) => {
    const grid = generateGrid(5, 5);
    const centerPoints = generateCenterPoints(grid);
    const hexPoints = generateHexPoints(centerPoints);

    game.layout = {
      hexagons: grid.map((coordinate, index) => (
        {
          coordinate: grid[index],
          centerPoint: centerPoints[index],
          points: hexPoints[index],
        })),
    };

    resolve();
  });
}

export default generateNewLayout;
