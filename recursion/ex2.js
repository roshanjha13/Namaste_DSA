n = 5
function example2(nums) {
    if (nums >  n) return

    console.log(nums);

    example2(++nums)
    
    
}

example2(1)