var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--){
       if(digits[i] >= 9){
        console.log({d: digits[i]})
            digits[i] = 0
       }else{
            digits[i] = digits[i] + 1
            return digits
       }
    }
    digits.unshift(1)
    return digits
};

console.log(plusOne([1, 9, 9]))