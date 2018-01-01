import roundToNearest from '../../../../helpers/roundToNearest';

function generateCenterPoints(grid) {
  const radius = 30;
  const offset = (Math.sqrt(3) * radius) / 2;
  let x;
  let y;

  return grid.map((gridCoordinate) => {
    const [column, row] = gridCoordinate;

    x = 40 + (offset * column * 2); // 40 pushes the grid off the left edge of svg viewbox
    y = 40 + (offset * row * Math.sqrt(3));
    if (row % 2 !== 0) {
      x += offset;
    }
    return [roundToNearest(x, 100), roundToNearest(y, 100)];
  });
}

export default generateCenterPoints;
