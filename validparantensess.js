const isValid = function(s){
    const stack = []

    for(let i = 0; i < s.length; i++){
        const top = stack[stack.length - 1]

        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i])
        }else if(s[i] === ')' && top === '(' && stack.length != 0){
            stack.pop()
        }else if(s[i] === '}' && top === '{' && stack.length != 0){
            stack.pop()
        }else if(s[i] === ']' && top === '[' && stack.length != 0){
            stack.pop()
        }else{
            return false
        }

    }
    return stack.length === 0
}

const isValidTrain = function(s){
    const stack = []
    const map = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']'],
    ])

    // ([{}])
    // (()())
   1 // () 1 -> 1 -> n
   2 // (()) || ()() 

    // 1 ^ 1 -> 1
    // 2 ^ 1 -> 2
    // 3 + 2 -> 5
    // 3 * 5 -> 15

    // ((())) || ()()() || (()()) || ()(()) || (())() 3 -> 5 -> n + 2
     // 
    //  2 >> $2 * 2
    //  3 >> $3 * 2 + $1 * 1 + $2 * 2 
    //  4 >> $4 * 2 + $3 * 3 + $2 * 7

    // (()()()) 1
    // (()(())) 1 
    // ((())()) 1
     
     
    // (())(()) 2

    // ((()))() 2
    // ()((())) 2
    // ()(()()) 2
    // ((()))() 2
    // (()())() 2
    // ((()())) 2

    // ()()(()) 3
    // (())()() 3
    // ()(())() 3

    // (((()))) 4
    // ()()()() 4






   // || ()()()() || (()()()) || ()(()()) || (()())()
    //  (())(())

    // (([])) => ))] ]))

    for(let i = 0; i < s.length; i++){
       if(map.has(s[i])){
            stack.push(map.get(s[i]))
       }else if(s[i] !== stack.pop()) {
            return false;
       }
    }
    return stack.length === 0
}

console.log(isValidTrain("([{}])"))