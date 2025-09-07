function evalRPN(tokens) {
    let stack = [];
    let val = 0 ;
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "+") {
            let a = stack.pop();
            let b = stack.pop();
            val = b + a;

            stack.push(val)
        } else if (tokens[i] === "-") {
            let a = stack.pop();
            let b = stack.pop();
            val = b - a;

            stack.push(val)
        } else if (tokens[i] === "*") {
            let a = stack.pop();
            let b = stack.pop();
            val = b * a;

            stack.push(val)
        }else if (tokens[i] === "/") {
            let a = stack.pop();
            let b = stack.pop();
            val = Math.trunc(b / a);

            stack.push(val)
        } else {
            val = parseInt(tokens[i]);
            stack.push(val)
        }
        
    }

    return val;
};

console.log(evalRPN(["4","13","5","/","+"]));
