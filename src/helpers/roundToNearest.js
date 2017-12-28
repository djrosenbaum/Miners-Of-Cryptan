function roundToNearest(num, toNearest) {
  return Math.round(100 * num) / toNearest;
}

module.exports = {
  roundToNearest,
};
