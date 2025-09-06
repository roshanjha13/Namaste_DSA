function validParenthesis(s) {
    let stack = [];

    let map = {
        "{" : "}",
        "(" : ")",
        "[" : "]"
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i])
        } else {
            let top  = stack.pop()
            if (!top || s[i] !== map[top]) return false
        }
    }

    return true
}

console.log(validParenthesis("()"));
