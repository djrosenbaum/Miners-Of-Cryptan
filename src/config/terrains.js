import _ from 'lodash';

const terrainConfig = {
  hill: 3,
  forest: 4,
  mountain: 3,
  field: 4,
  pasture: 4,
  desert: 1,
};

function generateTerrainArray() {
  const terrainArray = [];

  function pushTerrain(totalTerrains, key) {
    _.times(totalTerrains, () => {
      terrainArray.push(key);
    });
  }

  _.forEach(terrainConfig, pushTerrain);

  return terrainArray;
}

const terrains = () => (generateTerrainArray());

export default terrains;
