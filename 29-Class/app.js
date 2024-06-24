const obj = {
    username: 'Shahzaib',
    age: 5959,
    email: 'abchsfs',
    phone: 5959454554454,
}

// export {obj,arr};

const objectEntries = Object.entries(obj);

// Object.entries(obj).map(item => {
//     console.log(item);
// })

const div = document.querySelector("div");

// for (let i = 0; i < objectEntries.length; i++) {
//     // console.log(Object.entries(obj)[i]);
//     for (let j = 0; j < objectEntries[i].length; j++) {
//         // console.log(objectEntries[i][j]);
//         div.innerHTML += `
//         <div class="card" style="width: 18rem;">
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" class="card-link">Card link</a>
//                 <a href="#" class="card-link">Another link</a>
//             </div>
//         </div>
// `;
//     }
// }

console.log(objectEntries);

// const {username,age,email,phone} = obj;

// console.log(age);



// const arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);
// const arr2 = [10,11,12,13,14,15,16,17,18,19];
// const arr3 = [...arr];
// console.log(arr3);


function division(num1,num2) {
    return num2/num1;
}
// console.log(division(9,3));

// export default division;