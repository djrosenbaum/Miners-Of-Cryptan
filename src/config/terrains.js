import _ from 'lodash';

const terrainConfig = {
  hill: {
    total: 3,
  },
  forest: {
    total: 4,
  },
  mountain: {
    total: 3,
  },
  field: {
    total: 4,
  },
  pasture: {
    total: 4,
  },
  desert: {
    total: 1,
  },
};

function generateTerrainArray() {
  const terrainArray = [];

  function pushTerrain(terrain, key) {
    _.times(terrain.total, () => {
      terrainArray.push(key);
    });
  }

  _.forEach(terrainConfig, pushTerrain);

  return _.shuffle(terrainArray);
}

function terrains() {
  return generateTerrainArray();
}

export default terrains;
