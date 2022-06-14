/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result;

  for (let index = 0; index < nums.length; index++) {
    for (let n = 0; n < nums.length - 1; n++) {
      const firstIndex = index;
      const secondIndex = index + 1 + n;

      const first = nums[firstIndex];
      const second = nums[secondIndex];

      if (target === first + second) {
        result = [firstIndex, secondIndex];
      }
    }
  }

  return result;
};