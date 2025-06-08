function findMinMaxElemInArr(arr){
    if (arr.length === 0) return "invalid array"
    
    let largest = arr[0]
    let smallest = arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]>largest) {
            largest=arr[i];            
        }
        
        if (arr[i]<smallest) {
            smallest=arr[i]
        }
    }

    return {
        max:largest,
        min:smallest
    }
    
}

console.log(findMinMaxElemInArr([10,9,31,16,81,99]))