function linearSearch(arr,t) {
    if (arr.length === 0) return false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == t) {
            return i
        }
    }

    return -1
}

console.log(linearSearch([4,9,1,0,2],0))