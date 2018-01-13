import _ from 'lodash';
import terrains from '../../config/terrains';
import numberTokens from '../../config/numberTokens';
import tileGrid from '../../config/tileGrid';

let shuffledTerrains;

function buildTile(coordinate, index) {
  if (index < numberTokens.length) {
    const tile = {
      terrain: shuffledTerrains[index],
      grid: coordinate,
    };

    return {
      ...numberTokens[index],
      ...tile,
    };
  }
  return {
    terrain: 'desert',
    grid: coordinate,
    robber: true,
  };
}

function tiles() {
  shuffledTerrains = _.shuffle(terrains);
  shuffledTerrains.splice(shuffledTerrains.indexOf('desert'), 1);
  return tileGrid.map(buildTile);
}

export default tiles;
