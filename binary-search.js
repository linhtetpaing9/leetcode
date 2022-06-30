/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let min = 0,
    max = nums.length - 1;

  while (min <= max) {
    const middleIndex = Math.floor(min + (max - min) / 2);
    if (nums[middleIndex] === target) {
      return middleIndex;
    }
    if (nums[middleIndex] < target) {
      min = middleIndex + 1;
    }
    if (nums[middleIndex] > target) {
      max = middleIndex - 1;
    }
  }
  return -1;
};

const result = search([-1,0,3,5,9,12], 2);
console.log({ result });
