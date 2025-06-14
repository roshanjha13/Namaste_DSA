function removeDuplicate(arr) {
    let uniqueElem = []
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueElem.includes(arr[i])) {
            uniqueElem.push(arr[i])
        }
    }
    
    let k = uniqueElem.length;

    for (let i = 0; i < k; i++) {
        
    }
}

removeDuplicate([0,0,1,1,1,2,2,3,3,4])