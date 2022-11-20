
function validate(str) {
    let ca = str.split("")

    const decide = {
        "(": ")",
        "{": "}",
        "[": "]",
        ")": "(",
        "}": "{",
        "]": "["
    }

    const isOpen = (s) => s === "(" || s === "{" || s === "["

    let result = []

    for(let i = 0; i < ca.length; i++){
        // if(isOpen(ca[i])){
            if(ca.indexOf(decide[ca[i]]) > -1){
                result.push([ca[i], decide[ca[i]]])
            }else{
                result.push([decide[ca[i], ca[i]]])
            }
        // }
        // if(!isOpen(ca[i])){
        //     result.push(false)
        // }
    }
    console.log("(}[{}{}])[".split("{"))
    return result.every(r => r)

}

console.log(validate("(}[{}{}])["))