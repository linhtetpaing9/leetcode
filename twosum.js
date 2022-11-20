

// time com: O(n^2) poly
// space com: O(1)
const twoSum = (nums, target) => {

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if((nums[i] + nums[j]) === target){
                return [i, j]
            }
        }
    }
}

// Hashmap
// time com: O(N) linear
// space com: O(N) linear


const twoSumCom = (nums, target) => {
    let map = {}
    for(let i = 0; i < nums.length; i++){
        let value = nums[i]
        let pair = target - value
        if(map[pair] !== undefined){
            return [map[pair], i]
        }else{
            map[value] = i
        }
    }
}

// 1 3
// 1 6
// 1 7
// 3 6
// 3 7

// i = 0
// j = i + 1



const twoSumTest = (nums, target) => {

    const map = {}
    for(let i = 0; i < nums.length; i++) {
        const value = nums[i]
        const pair = target - value

        if(map[pair] !== undefined){
            return [map[pair], i]
        }else{
            map[value] = i
        }
    }
    // for(let i = 0; i < nums.length; i++){
    //     for(let j = i+1; j < nums.length; j++){
    //         if(nums[i] + nums[j] === target){
    //             return [i, j]
    //         }
    //     }
    // }
}


console.log(twoSumCom([1, 3, 6, 7], 10))