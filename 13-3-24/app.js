// const table = +prompt('Which number table do you want?');
// const length = +prompt('How long should the table be?')



// for(let i = 1; i<=length ; i++){
//     console.log(`${table} * ${i} = ${table*i}`);
// }



// for (let i = 1; i <= 10; i++) {
//     console.log('outer loop > ' , i);
//     for (let j = 1; j <=5; j++) {
//         console.log('inner loop > ' , j);
//     }
// }

//loop jab tak khatam ni hota bahar nai nikaltaa
//pehle outer loop chalega phir wo inner me shift hoga or jab tak inner khatam ni hoga tab tak wo recheck ni hogaa



// for(let i = 1; i<=100 ; i++){
//     // console.log(`1 * ${i} = ${1*i}`);
//     for(let j = 1; j<=10 ; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }


const fruits = ['apple' , 'banana' , 'orange' , 'watermelon' , 'grapes'];
const ul = document.querySelector('ul');
for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
    ul.innerHTML += `<li>${fruits[i]}</li>`
}