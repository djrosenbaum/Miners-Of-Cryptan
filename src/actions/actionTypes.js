const PLACE_SETTLEMENT = 'PLACE_SETTLEMENT';
// const PLACE_ROAD = 'PLACE_ROAD';

function placeSettlement(coordinate) {
  return {
    type: PLACE_SETTLEMENT,
    coordinate,
  };
}


// {
//   type: PLACE_SETTLEMENT,
//   coordinate: '1_0'
// }
