
function validate(str) {
    let ca = str.split("")

    const decide = {
        "(": ")",
        "{": "}",
        "[": "]",
    }

    const isOpen = (s) => s === "(" || s === "{" || s === "["

    let result = []

    console.log({result})
    console.log(ca.filter(i => !isOpen(i)))
    // return result.every(r => r)

}

console.log(validate("(}[{}{}])["))