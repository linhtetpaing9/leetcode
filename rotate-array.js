/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// not in-place modification
var rotate = function (nums, k) {
  let i = k;

  while (i != 0) {
    const last = nums.length - 1;
    nums = [nums[last], ...nums.slice(0, last)];
    console.log(nums.slice(0, last));
    i--;
  }
};

var rotate = function (nums, k) {
  // let i = k;
  // let n = nums.length
  // k = k % n
  // console.log({k})

  while (i != 0) {
    const last = nums.length - 1;
    nums = [nums[last], ...nums.slice(0, last)];
    console.log(nums.slice(0, last));
    i--;
  }

  // const reverse = () => {

  // }
    // let arr = new int[nums.length];
    // for (let i = 0; i < nums.length; i++) {
    //     arr[(i + k) % nums.length] = nums[i];
    // }
    // for (let i = 0; i < nums.length; i++) {
    //     nums[i] = arr[i];
    // }
};

console.log(rotate([-1, -100, 3, 99], 2));
