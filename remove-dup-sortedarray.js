// first last
// 1 1 -> 0 1
// 1 2 -> 1 2
// 2 2 -> 2 3
// 2 3 -> 3 4
// 3 4 -> 4 5
// 4 5 -> 5 6
// 5 5 -> 6 7
// 5 5 -> 7 8

// for 
//  for -> O(n^2)


var removeDuplicates = function(nums) {
    let left = 0
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i + 1] > nums[i]){
            left++
            nums[left] = nums[i + 1]
        }
    }
    return nums
}

// [0, 2 -> 1, 5 -> 2, 7 -> 3, 9 -> 4]
// [0, 1, 2, 3, 4]

console.log(removeDuplicates([1, 1, 2, 3, 4, 5, 5, 6]))
