function selectionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n ; i++) {
        //track the curr and previous
        let curr = arr[i];
        let prev = i - 1;

        while (arr[prev]>curr && prev >= 0) {
            arr[prev+1] = arr[prev];
            prev--;
        }
        arr[prev+1] = curr
    }    

    return arr
}

console.log(selectionSort([5,2,4,1]));
