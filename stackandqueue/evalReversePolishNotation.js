function evalRPN(tokens) {
    let stack = [];
    // let val = 0 ;
    // for (let i = 0; i < tokens.length; i++) {
    //     if (tokens[i] === "+") {
    //         let a = stack.pop();
    //         let b = stack.pop();
    //         val = b + a;

    //         stack.push(val)
    //     } else if (tokens[i] === "-") {
    //         let a = stack.pop();
    //         let b = stack.pop();
    //         val = b - a;

    //         stack.push(val)
    //     } else if (tokens[i] === "*") {
    //         let a = stack.pop();
    //         let b = stack.pop();
    //         val = b * a;

    //         stack.push(val)
    //     }else if (tokens[i] === "/") {
    //         let a = stack.pop();
    //         let b = stack.pop();
    //         val = Math.trunc(b / a);

    //         stack.push(val)
    //     } else {
    //         val = parseInt(tokens[i]);
    //         stack.push(val)
    //     }
        
    // }

    // return val;

    
    // const map = {
    //     "+": (a,b) => (b+a),
    //     "*": (a,b) => (b*a),
    //     "-": (a,b) => (b-a),
    //     "/": (a,b) => Math.trunc(b/a),
    // };
    //     for(let i=0; i < arr.length; i++){
    //         if(map[arr[i]]) {
    //             let a = stack.pop();
    //             let b = stack.pop();
    //             let ans = map[arr[i]](+a,+b);
    //             stack.push(ans);
    //         } else {
    //             stack.push(arr[i]) 
    //         }
    //     }
    // return Number(stack.pop()); 

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i] === '/' ) {
            let a = stack.pop()
            let b = stack.pop()

            let ans = eval(`${b} ${tokens[i]} ${a}`);

            stack.push(Math.trunc(ans))
        } else {
            stack.push(tokens[i])
        }
        
    }    

    return Number(stack.pop())

};

console.log(evalRPN(["4","13","5","/","+"]));
