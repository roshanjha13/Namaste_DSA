function mergeTwoSortedArray(num1,m,num2,n) {
 //my approach
    // let num1Copy = num1
    // for (let i = 0; i < m; i++) {
    //     num1Copy.pop() 
    // }
    // num1 = num1Copy
    
    // for (let i = 0; i < n; i++) {
    //     num1.push(num2[i])    
    // }

    // num1 = num1.sort((a,b)=>a-b)
    
    // return num1

//approach 2
    // let num1Copy = num1.slice(0,m);

    // let p1 = 0;
    // let p2 = 0;

    // for (let i = 0; i < m+n; i++) {
    //     if (p2>=n || (p1 < m && num1Copy[p1] < num2[p2])) {
    //         num1[i] = num1Copy[p1];
    //         p1++;
    //     } else {
    //         num1[i] = num2[p2];
    //         p2++;
    //     } 
    // }
    
//approach 3

    let p1 = m-1;
    let p2 = n-1;
    
    
    for (let i = m+n-1; i >= 0; i--) {
        if (p2<0) {
            break
        }
        if (p1 >= 0 && num1[p1] > num2[p2]) {
            num1[i] = num1[p1];
            p1--;
        } else  {
            num1[i] = num2[p2]
            p2--;
        }
    }


    return num1
}

var a = mergeTwoSortedArray([1,2,3,0,0,0],3,[2,5,6],3) 
console.log(a);
