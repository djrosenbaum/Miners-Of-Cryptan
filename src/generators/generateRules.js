import buildingCostCard from '../lookup/buildingCostCard';
import largestArmy from '../lookup/largestArmy';
import longestRoad from '../lookup/longestRoad';
import probability from '../lookup/probability';
import resourceProduction from '../lookup/resourceProduction';

function generateRules() {
  return {
    buildingCostCard,
    largestArmy,
    longestRoad,
    probability,
    resourceProduction,
  };
}

export default generateRules;
