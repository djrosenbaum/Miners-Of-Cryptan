import _ from 'lodash';
import terrains from '../../config/terrains';
import numberTokens from '../../config/numberTokens';
import tileGrid from '../../config/tileGrid';

let shuffledTerrains;
let numberTokensCopy;

function buildTile(coordinate, index) {
  const tile = {
    terrain: shuffledTerrains[index],
    grid: coordinate,
  };

  if (tile.terrain === 'desert') {
    tile.robber = true;
  }

  return {
    ...numberTokensCopy[index],
    ...tile,
  };
}

function tiles() {
  shuffledTerrains = _.shuffle(terrains());
  numberTokensCopy = [...numberTokens];
  numberTokensCopy.splice(shuffledTerrains.indexOf('desert'), 0, {});
  return tileGrid.map(buildTile);
}

export default tiles;
