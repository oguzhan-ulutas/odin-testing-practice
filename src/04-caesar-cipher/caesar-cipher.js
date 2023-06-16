const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Takes a character and finds its alphabetic order and case,
// if it is a punctuation or empty string just lets us know.
function findOrder(char) {
  for (let i = 0; i < 26; i++) {
    if (char === lowerCase[i]) {
      return { char, i, lowerCase: true };
    }
    if (char === upperCase[i]) {
      return { char, i, lowerCase: false };
    }
  }
  return { char, punctuation: true };
}

function caesarCipher(str, shift) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = findOrder(str[i]);
    if (char.punctuation) {
      result += char.char;
    } else if (char.lowerCase) {
      const newChar = lowerCase[(char.i + shift) % 26];
      result += newChar;
    } else {
      const newChar = upperCase[(char.i + shift) % 26];
      result += newChar;
    }
  }
  return result;
}

module.exports = caesarCipher;
