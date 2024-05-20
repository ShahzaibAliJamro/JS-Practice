// let div = document.querySelector('div');
// let arr = ['apple1','apple2','apple3','apple4','apple5','apple6',];
// for (let i = 0; i < arr.length ; i++) {
//     div.innerHTML += `<p>${arr[i]}</p>`;
//     console.log(arr[i]);
// }

let todo = document.querySelector('#todo');
let ol = document.querySelector('ol');
let todoList = [];
function addTodo() {
    todoList.push(todo.value);
    // todo.value = ''
    for (let i = 0; i < todoList.length; i++) {
        ol.innerHTML += `
        <li>
        ${todoList[i]}
        </li>
        `
    }
    console.log(todoList);
}