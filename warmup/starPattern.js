// function starPattern1(num) {
//     for (let i = 0; i < num; i++) {
//         let row = " "
//         for (let j = 0; j < num; j++) {
//             row = row + " * "
//         }
//         console.log(row);
//     } 
// }

// starPattern1(4);

// function starPattern2(num) {
//     for (let i = 0; i < num; i++) {
//         let row = " "
//         for (let j = 0; j <= i; j++) {
//             row = row + " * "
//         }
//         console.log(row);
//     } 
// }

// starPattern2(4);

// function starPattern3(num) {
//     for (let i = 0; i < num; i++) {        
//         let row = " "
//         for (let j = 0; j <=i ; j++) {
//             row = row + (j+1)
//         }
//         console.log(row);
//     } 
// }

// starPattern3(4);

// function starPattern4(num) {
//     for (let i = 0; i < num; i++) {        
//         let row = " "
//         for (let j = 0; j <=i ; j++) {
//             row = row + (i+1)
//         }
//         console.log(row);
//     } 
// }

// starPattern4(4);

// function starPattern5(num) {
//     for (let i = 0; i <= num; i++) {        
//         let row = " "
//         for (let j = 0; j <num-i ; j++) {
//             row = row + (j+1)
//         }
//         console.log(row);
//     } 
// }

// starPattern5(4);

// function starPattern6(num) {
//     for (let i = 0; i <= num; i++) {        
//         let row = " "
//         for (let j = 0; j <num-i ; j++) {
//             row = row + '*'
//         }
//         console.log(row);
//     } 
// }

// starPattern6(4);

// function starPattern7(num) {
//     for (let i = 0; i < num; i++) {        
//         let row = " "
//         for (let j = 0; j < num-(i+1) ; j++) { // for extra spacse
//             row = row + ' '
//         }
//         for (let k = 0; k < i+1; k++) { // for star
//             row = row + '*'
//         }
//         console.log(row);
//     } 
// }

// starPattern7(4);

// function starPattern8(num) {
//     for (let i = 0; i < num; i++) {        
//         let row = " ",flipFlop = 1
//         for (let j = 0; j < i+1; j++) { // for star
//             row = row + flipFlop
//             if (flipFlop == 1) {
//                 flipFlop = 0
//             } else {
//                 flipFlop = 1
//             }
//         }
//         console.log(row);
//     } 
// }

// starPattern8(4);

let flipFlop = 1
function starPattern9(num) {
    for (let i = 0; i < num; i++) {        
        let row = " "
        for (let j = 0; j < i+1; j++) { // for star
            row = row + flipFlop
            if (flipFlop == 1) {
                flipFlop = 0
            } else {
                flipFlop = 1
            }
        }
        console.log(row);
    } 
}

starPattern9(4);