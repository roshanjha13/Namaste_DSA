function example1(nums) {
    if (nums === 0) return

    console.log(nums);

    nums = nums -1

    example1(nums)
    
}

example1(5)