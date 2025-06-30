function binarySearch(arr,t) {
    if (arr.length === 0) return false;

    let left  = 0;
    let right = arr.length - 1;

    while (right >= left) {
        let middle = Math.floor((left + right)/2)
        if (t == arr[middle]) {
            return middle;
        } else if (t < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return -1
    
}

// console.log(binarySearch([-1,0,3,5,9,12],-1))
console.log(binarySearch([5],5))