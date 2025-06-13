function  reverseInteger(n) {
    let lastDigit=0;
    let reverse = 0;
    let nCopy = n;
    n = Math.abs(n);
    while(n>0){
        lastDigit = n%10;
        reverse = (reverse*10)+lastDigit
        n=Math.floor(n/10)
    }

    return (nCopy < 0) ? -reverse : reverse;
}

let ans = reverseInteger(-123)
console.log(ans);