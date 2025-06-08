function countNegativeNumber(arr){
    if (arr.length === 0) return "invalid array"
    
    let count = 0
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            ++count            
        }    
    }

    return count
}

console.log(countNegativeNumber([10,-4,6,-9,3,-2,8]))