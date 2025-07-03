function mergeSort(a) {
    if (a.length <= 1) return a

    let mid = Math.floor(a.length/2)

    let left = mergeSort(a.slice(0,mid))
    let right = mergeSort(a.slice(mid))

    return merge(left,right)
}

function merge(left,right) {
    let newArr = []

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            newArr.push(left[i]);
            i++;
        } else {
            newArr.push(right[j]);
            j++;
        }
    }
    
    return [...newArr,...left.slice(i),...right.slice(j)]

}

console.log(mergeSort([5,2,4,1]));
