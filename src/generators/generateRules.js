const { buildingCostCard } = require('../lookup/buildingCostCard.js');
const { largestArmy } = require('../lookup/largestArmy.js');
const { longestRoad } = require('../lookup/longestRoad.js');
const { probability } = require('../lookup/probability.js');
const { resourceProduction } = require('../lookup/resourceProduction.js');

function generateRules() {
  return {
    buildingCostCard,
    largestArmy,
    longestRoad,
    probability,
    resourceProduction,
  };
}

module.exports = {
  generateRules,
};
