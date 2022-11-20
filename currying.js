
// [9, 9] => [1, 0, 0]

// [4, 5] => [4, 6]
// [4, 9] => [5, 0]

// iterate array from end
// compare is less than 9 
// true => +1 => end loop
// false => 0

// if everything 0, we add 1 to the front


const currying = (digits) => {

    for(let i = digits.length - 1; i >= 0; i--){

        if(digits[i] < 9){
            digits[i] = digits[i] + 1
            return digits
        }else{
            digits[i] = 0
        }

    }
    digits.unshift(1)

}

console.log({currying: currying([4, 5])})