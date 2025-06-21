function consecutiveOnes(arr) {
    let currentCount = 0;
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            currentCount = currentCount+1;
            if (currentCount>maxCount) {
                maxCount = currentCount
            }
        } else if (arr[i] !== 1) {
            currentCount = 0
        }
        
    }

    return maxCount
}

var a = consecutiveOnes([1,1,0,1,1,1,0,1])

console.log(a);
