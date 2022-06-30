/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  console.log("test");
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);
    if (nums[midIndex] === target) {
      return midIndex;
    }
    if (nums[midIndex] < target) {
      leftIndex = midIndex + 1;
    }
    if (nums[midIndex] > target) {
      rightIndex = midIndex - 1;
    }
  }
  return leftIndex;
};

const result = searchInsert([1, 2, 3, 4, 5, 6, 7, 8], 9);
console.log({ result });
