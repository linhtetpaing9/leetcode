/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  return nums
    .map((num) => {
      const n = Math.abs(num);
      return n * n;
    })
    .sort((a, b) => a - b);
};
const result = sortedSquares([-5, -4, -6, -3, 8]);

console.log({ result });
