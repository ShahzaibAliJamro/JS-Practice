// task A

// let array = ['apple1','apple2','apple3','apple4','apple5','apple6','apple7','apple8','apple9','apple10','apple11','apple12','apple13','apple14','apple15','apple16','apple17','apple18','apple19','apple20',];
// let ol = document.querySelector('.ol');
// printTodo()
// function printTodo() {
//     ol.innerHTML = ''
//     for (let i = 0; i < array.length; i++) {
//         ol.innerHTML += `<li>${array[i]}
//         <button class="dlt-button" onclick="dltOne(${i})">Delete</button>
//         </li>`
//     }
// }
// function deleteAll() {
//     array = [];
//     ol.innerHTML = '';
//     printTodo()
// };
// function dltOne(index) {
//     console.log('hello');
//     array.splice(index,1);
//     ol.innerHTML = '';
//     for (let i = 0; i < array.length; i++) {
//         ol.innerHTML += `<li>${array[i]}
//         <button class="dlt-button" onclick="dltOne()">Delete</button>
//         </li>`
//     }
// }




// task B

// let input1 = document.querySelector('.input1');
// let input2 = document.querySelector('.input2');
// let select = document.querySelector('#select');
// let h1 = document.querySelector('.h1');


// function showCalculations() {
//     let num1 = parseFloat(input1.value);
//     let num2 = parseFloat(input2.value);
//     if (select.value == '+') {
//         h1.innerHTML = num1+num2;
//     }else if (select.value == '-') {
//         h1.innerHTML = num1-num2;
//     }else if (select.value == '/') {
//         h1.innerHTML = num1/num2;
//     }else if (select.value == '*') {
//         h1.innerHTML = num1*num2;
//     }
// }