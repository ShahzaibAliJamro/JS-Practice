let ol = document.querySelector('#abbu');
let fruits = ['apple','banana','mango','grapes','zatoon','santra',];


//         for loops
// for (let index = 0; index < fruits.length; index++) {
//     ol.innerHTML += `<li>${fruits[index]}</li>`
// }

//         do while loops
// let index = 0;
// do {
//     ol.innerHTML += `<li>${fruits[index]}</li>`;
//     index++
// } while (index < fruits.length);

//         while loops
// let index = 0;
// while (index < fruits.length) {
//     ol.innerHTML += `<li>${fruits[index]}</li>`
//     console.log(fruits[index]);
//     index++
// }

function showKaraadeBhai(){
    //do while
    let index = 0;
do {
    ol.innerHTML += `<li>${fruits[index]}</li>`;
    index++
} while (index < fruits.length);


//while
// let index = 0;
// while (index < fruits.length) {
//     ol.innerHTML += `<li>${fruits[index]}</li>`
//     console.log(fruits[index]);
//     index++
// }


//for
// for (let index = 0; index < fruits.length; index++) {
//     ol.innerHTML += `<li>${fruits[index]}</li>`
// }
}