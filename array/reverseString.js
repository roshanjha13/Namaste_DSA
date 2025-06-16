function reverseString(arr) {
    //my solution
    // if (arr.length === 0) return false

    // let i = 0;
    // let j = arr.length-1;
    
    // while (i<j) {
    //     let temp = arr[i];
    //     arr[i] = arr[j];
    //     arr[j] = temp;

    //     i++;
    //     j--
    // }

    // return arr
    
    //akshay saini
 
    let len = arr.length
    let halfLen = Math.floor(len/2)
    for (let i = 0; i < halfLen; i++) {        
        let temp = arr[i];
        arr[i] = arr[len-1-i];
        arr[len-1-i] = temp

    }

    return arr;
}

let ans = reverseString(['h','e','l','l','o'])

console.log(ans);