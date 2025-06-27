function powerOfTwo(nums) {
    if (nums === 1) return true
    
    else if (nums%2 == 1 || nums < 0) return false    

    return powerOfTwo(nums/2)
}

console.log(powerOfTwo(12))