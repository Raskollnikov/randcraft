/**
 * generates a random integer between the given min and max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = { generateRandomNumber };
