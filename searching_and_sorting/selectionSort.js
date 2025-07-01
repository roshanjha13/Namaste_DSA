function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        //track the min
        let min = i;
        for (let j = i; j < n; j++) {
            if (arr[j]<arr[min]) {
                min = j
            }
        }

        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp
        }
    }    

    return arr
}

console.log(selectionSort([5,2,4,1]));
