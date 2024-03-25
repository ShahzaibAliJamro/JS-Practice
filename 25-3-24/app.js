// document.write(
//     `<input type="text" placeholder="enter value 1" id="input1">
//     <input type="text" placeholder="enter value 2" id="input2">
//     <button onclick="showValue()">Click Me</button>
//     <h1 class="h1"></h1>
//     <h1 class="h2"></h1>`
// );
// let h1 = document.querySelector('.h1');
// let h2 = document.querySelector('.h2');
// let input1 = document.querySelector('#input1');
// let input2 = document.querySelector('#input2');
// function showValue() {
//     h1.innerHTML = input1.value;
//     h2.innerHTML = input2.value;
//     input1.value = '';
//     input2.value = '';
// }













// Q 19
let input = +prompt('enter a number');
for (let index = input; index >= 1; index--) {
    let stars = '';
    for (let j = 1; j <= index; j++) {
        stars += '*';
    }
    console.log(stars);
};



















