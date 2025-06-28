function factorial(nums) {
    if (nums === 0 || nums == 1) return 1
    
    return nums*factorial(nums-1)
    
}

console.log(factorial(7))