var guessNumber = function(n) {
   let l = 1;
   let r = n;

   while(l <= r){
    let m = Math.floor(l+(r-l)/2);
    let res = guess(m);
    if(res === 0){
        return m;
    }
    else if(res < 0){
        r = m - 1;
    } else {
        l = m + 1;
    }
   }

   return -1 
};