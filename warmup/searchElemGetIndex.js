function searchElemGetIndex(arr,t){
    if (arr.length === 0) return "invalid array"

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === t) {
            return i            
        }
    }

    return -1
}

console.log(searchElemGetIndex([10,5,6,9,8],8))