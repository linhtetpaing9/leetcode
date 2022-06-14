/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const rawList = x.toString();
  const list = rawList.split("");
  const reverseList = rawList.split("").reverse();

  const result = [];

  for (let i = 0; i < list.length / 2; i++) {
    result.push(list[i] === reverseList[i]);
  }

  return result.every(r => r)
};
