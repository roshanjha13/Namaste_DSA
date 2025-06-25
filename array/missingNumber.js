function missingNumber(nums) {
    let len = nums.length;
    let sum = (len*(len+1))/2
    let sum1 = 0;
    for (let i = 0; i < nums.length; i++) {
        sum1+=nums[i]
    }
    return sum - sum1
    
    
}

var a = missingNumber([1,0,4,2,5]) 
console.log(a);

