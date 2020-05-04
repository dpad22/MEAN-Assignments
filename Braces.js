function bracesValid(str) {
// if the string is empty, return false
    if (str.length <= 1)
        return false

    var matchingBracket, character
    var arr = []

    var openingBrackets = ['[', '{', '(']
    var closingBrackets = [']', '}', ')']

    // loop through the length of the string. Setting character variable for each string position
    for (var i = 0; i < str.length; i++) {
        character = str[i]

        if (closingBrackets.indexOf(character) > -1) {
        matchingBracket = openingBrackets[closingBrackets.indexOf(character)]

        // if no match, return false
        if (arr.length == 0 || (arr.pop() != matchingBracket)) {
            return false
        }
    } else {
        arr.push(character)
    }
    }

    return (arr.length == 0)
};

console.log(bracesValid("()()[)]"))
console.log(bracesValid("({}[])"))
console.log(bracesValid("{}[]()"))
console.log(bracesValid("}{([}{}])"))
console.log(bracesValid(""))



