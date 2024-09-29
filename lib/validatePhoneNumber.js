/**
 * Validates a phone number based on common patterns for different countries.
 * @param {string} phoneNumber
 * @param {string} [country='GE'] - Optional country code for validation .
 * @returns {boolean} Returns true if the phone number is valid, false otherwise.
 */
function validatePhoneNumber(phoneNumber, country = "GE") {
  const regexPatterns = {
    US: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    UK: /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/,
    GE: /^(?:\+995\s?5\d{2}\s?\d{3}\s?\d{3}|5\d{2}\s?\d{3}\s?\d{3})$/,
    CA: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    AU: /^\+61\s?4\d{2}\s?\d{3}\s?\d{3}$/,
    IN: /^\+91\s?[789]\d{9}$/,
    DE: /^\+49\s?1[567]\d{8}$/,
    FR: /^\+33\s?6\d{8}$/,
    IT: /^\+39\s?3\d{2}\s?\d{3}\s?\d{3}$/,
    BR: /^\+55\s?(1[1]|[2-9][1-9])\s?\d{4}\s?\d{4}$/,
    RU: /^\+7\s?9\d{9}$/,
    JP: /^\+81\s?0\d{1,4}\s?\d{1,4}\s?\d{4}$/,
    CN: /^\+86\s?(1[3-9]\d{9})$/,
    MX: /^\+52\s?1?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
    NL: /^\+31\s?6?\d{8}$/,
    SE: /^\+46\s?7[0-9]{9}$/,
    DK: /^\+45\s?\d{8}$/,
    NO: /^\+47\s?\d{8}$/,
    CH: /^\+41\s?7[5-9]\d{7}$/,
    IE: /^\+353\s?8[0-9]{2}\s?\d{3}\s?\d{3}$/,
    NZ: /^\+64\s?2[0-9]{7}$/,
    SG: /^\+65\s?\d{4}\s?\d{4}$/,
  };

  const pattern = regexPatterns[country] || regexPatterns["GE"];
  return pattern.test(phoneNumber);
}

module.exports = { validatePhoneNumber };
