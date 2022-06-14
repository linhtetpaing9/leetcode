// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const stringToArray = s.split("");
  const mapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const result = stringToArray.reduce((acc, curr, index) => {
    const previous = stringToArray[index - 1];
    if (index > 0 && mapping[curr] > mapping[previous]) {
      return acc - mapping[previous] * 2 + mapping[curr];
    }
    return acc + mapping[curr];
  }, 0);

  return result;
};

const result = romanToInt("LVIII");
