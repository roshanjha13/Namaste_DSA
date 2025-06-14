function removeDuplicate(arr) {
//my soln
    // let uniqueElem = []
    // for (let i = 0; i < arr.length; i++) {
    //     if (!uniqueElem.includes(arr[i])) {
    //         uniqueElem.push(arr[i])
    //     }
    // }
    // return uniqueElem;
    let x = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[x]) {
            x = x+1;
            arr[x] = arr[i]
        }
    }

    return x+1
}

let ans = removeDuplicate([0,0,1,1,1,2,2,3,3,4])

console.log(ans);
