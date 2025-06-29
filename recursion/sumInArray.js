let arr = [5,3,2,0,1]

function arraySum(n) {
    // if (arr.length === 0) return 0;
    //my solution    
    // return arr[0]+arraySum(arr.slice(1))

    //askhay saini solution

    if (n == 0) {
        return arr[n]
    }

    return arr[n]+arraySum(n-1)

}


console.log(arraySum([arr.length-1]))


// console.log(arraySum([5,3,2,0,1]))