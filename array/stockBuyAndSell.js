function stockBuyAndSell(arr){
    if (arr.length === 0) return "invalid array"
    
    let minVal = arr[0]

    let maxPofit =  0

    for (let i = 1; i < arr.length; i++) {
        if (arr[i]-minVal > maxPofit) {
            maxPofit = arr[i]-minVal;
        }

        if (arr[i] < minVal) {
            minVal = arr[i]
        }

    }

    return maxPofit;
}

console.log(stockBuyAndSell([7,1,5,3,6,4]))