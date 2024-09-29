// lib/randomString.js

/**
 * Generates a random alphanumeric string of a given length.
 * @param {number} length - The length of the string to be generated.
 * @returns {string} A random alphanumeric string.
 */
function generateRandomString(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

module.exports = { generateRandomString };
