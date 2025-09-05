function validParenthesis(str) {
    let stack = [];

    let map = {
        "{" : "}",
        "(" : ")",
        "[" : "]"
    }

    for (let i = 0; i < str.length; i++) {
        if (map[str[i]]) {
            stack.push(str[i])
        } else {
            let top  = stack.pop()
            if (!top || str[i] !== map[top]) return false
        }
    }

    return true
}

console.log(validParenthesis("()"));
