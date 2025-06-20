function consecutiveOnes(arr) {
// my solution
    // let currentCount = 0;
    // let maxCount = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] == 1) {
    //         currentCount = currentCount+1;
    //         if (currentCount>maxCount) {
    //             maxCount = currentCount
    //         }
    //     } else if (arr[i] !== 1) {
    //         currentCount = 0
    //     }
        
    // }

    // return maxCount
// akshay saini solution
    let currentCount = 0;
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            currentCount = currentCount++;
        } else {
            maxCount = Math.max(currentCount,maxCount)
            currentCount = 0
        }
        
    }

    return Math.max(maxCount,currentCount)
}

var a = consecutiveOnes([1,1,0,1,1,1,0,1])

console.log(a);
