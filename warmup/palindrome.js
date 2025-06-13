function palindrome(n) {
    if (n < 0) return false
    let rev = 0;
    let lastDigit = 0;
    let nCopy = n
    while (n > 0) {
        lastDigit = n%10
        rev = ( 10* rev ) + lastDigit
        n = Math.floor(n/10)
    }
    
    return rev==nCopy
}

let ans = palindrome(121);
console.log(ans);
