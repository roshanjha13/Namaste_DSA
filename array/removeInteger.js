function removeDuplicate(arr,val) {
    let x = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]!==val) {
            arr[x]=arr[i]
            x = x+1
        }
    }

    return x
}

let ans = removeDuplicate([3,2,2,3],3)

console.log(ans);
