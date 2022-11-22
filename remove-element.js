/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

//  different i !== i + 1 swap and i + 1 === val
//  same remove


//  2
    //             L
    // 0   1   2   2   3   0   4   2
    //             I

    // [0,1,4,0,3,_,_,_]

// step 0 -> val !== I -> L -> 0


// step 1 -> val !== I -> L -> 1 && nums[1] = num[1]
// step 2 -> val === I -> L -> 2
// step 3 -> val === I -> L -> 2
// step 4 -> val !== I -> L -> 3
// step 5 -> val !== I -> L -> 4
// step 6 -> val !== I -> L -> 5
// step 7 -> val === I -> L -> 5

// 2

// 0 1
// 1 2
// 2 2
// 2 3
// 3 0
// 0 4
// 4 2


 var removeElement = function(nums, val) {
    if(nums.length === 0) return 0

    let left = 0;
    for(let i = 0; i < nums.length; i++){

        if(nums[i] !== val){
            nums[left] = nums[i]
            left++
        }           
    }
    return left
};

console.log({ele: removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)})