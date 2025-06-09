function secondLargestElem(arr) {
    if(arr.length === 0) return "Invalid Array"
    
    //myApproach
    // let newArr = arr.sort((a,b)=>b-a)
    // return newArr[1]
    
    //akshay saini
    let firstLargest = -Infinity
    let secondLargest = -Infinity

    for (let i = 1; i < arr.length; i++) {
        if (arr[i]>firstLargest) {
            secondLargest = firstLargest
            firstLargest=arr[i];
        } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i];
        }  
    }

    return secondLargest;
}

let answer = secondLargestElem([9,9,9,8,6])

console.log(answer);
