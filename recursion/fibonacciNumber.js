function fibonacci(nums) {
    if (nums === 0) return 0

    if (nums === 1) return 1

    return fibonacci(nums - 1) + fibonacci(nums - 2)
}

console.log(fibonacci(8))