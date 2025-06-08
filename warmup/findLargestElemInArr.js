function findLargestElemInArr(arr){
    if (arr.length === 0) return "invalid array"
    
    let largest = arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]>largest) {
            largest=arr[i];            
        }    
    }

    return largest
}

console.log(findLargestElemInArr([10,9,31,16,81,99]))