// function findWordContaining(words,x) {
//     let newArr = []

//     for (let i = 0 ; i< words.length ; i++) {
//         if (words[i].includes(x)) {
//             newArr.push(i)
//         }
//     }

//     return newArr
// }

function findWordContaining(words,x) {
    let newArr = [];

    for (let i = 0 ; i< words.length ; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === x) {
                newArr.push(i);
                break;
            }
        }
    }

    return newArr;
}

console.log
(findWordContaining(["aaa","bcd","abc","ccc"],"a"))