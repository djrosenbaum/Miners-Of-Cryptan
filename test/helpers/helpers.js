function countTotal(someArray, itemToCount) {
  return someArray.filter(function filterItem(item) {
    return item === itemToCount;
  }).length;
}

module.exports = {
  countTotal
};
