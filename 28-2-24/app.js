document.write('<h1>Percentage Checker</h1>')

// var percentage = +prompt('Enter your Percentage');

// if(percentage > 100){
//     console.log("Invalid Percentage !!");
// }else if(percentage <= 33){
//     console.log("You are a failure!");
// }else if(percentage <= 40 && percentage > 33){
//     console.log("E Grade!");
// }else if(percentage <= 50 && percentage > 40){
//     console.log("D Grade!");
// }else if(percentage <= 60 && percentage > 51){
//     console.log("C Grade!");
// }else if(percentage <= 70 && percentage > 61){
//     console.log("B Grade!");
// }else if(percentage <= 80 && percentage > 71){
//     console.log("A Grade!");
// }else if(percentage <= 90 && percentage > 81){
//     console.log("A+ Grade!");
// }else if(percentage <= 100 && percentage > 91){
//     console.log("A++ Grade!");
// }else{
//     console.log(percentage);
// }

var num = +prompt('Enter a number');

if(num % 2 === 0){
    console.log("This is an even number");
}else{
    console.log("This is an odd number");
}