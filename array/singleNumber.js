function singleNumber(nums) {
//my solution
    // if (nums.length === 1) {
    //     return nums[0]
    // }

    // let hashTable = {}

    // for (let i = 0; i < nums.length; i++) {
    //     let num = nums[i];

    //     if (hashTable[num]) {
    //         hashTable[num]++
    //     } else {
    //         hashTable[num] = 1
    //     }
    // }

    // let singleElem = 0;

    // for (const key in hashTable) {
    //     if (hashTable[key] === 1) {
    //         singleElem = Number(key)
    //     }
    // }
    
    // return singleElem;

  //akshay saini  
    let xor = 0 ;

    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i]
    }

    return xor
}

var a = singleNumber([4,1,1,2,2]) 
console.log(a);

