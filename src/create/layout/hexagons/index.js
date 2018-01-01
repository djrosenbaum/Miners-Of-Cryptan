import generateGrid from './generateGrid';
import generateCenterPoints from './generateCenterPoints';
import generateHexPoints from './generateHexPoints';

let grid;
let centerPoints;
let hexPoints;

function addHexagon(coordinate, index) {
  return {
    coordinate: grid[index],
    centerPoint: centerPoints[index],
    points: hexPoints[index],
  };
}

function hexagons() {
  grid = generateGrid(5, 5);
  centerPoints = generateCenterPoints(grid);
  hexPoints = generateHexPoints(centerPoints);

  return grid.map(addHexagon);
}

export default hexagons;
