let todo = [];
let input = document.querySelector('.input');
let ol = document.querySelector('ol');
function printTodo() {
    ol.innerHTML = '';
    for (let i = 0; i < todo.length; i++) {
        ol.innerHTML += `
        <li>
        ${todo[i]}
        <button onclick="editTodo(${i})">Edit</button>
        <button onclick="deleteTodo(${i})">Delete</button>
        </li>`;
    }
}
function addTodo() {
    todo.push(input.value);
    input.value = '';
    printTodo();
}
function deleteTodo(index) {
    todo.splice(index,1);
    printTodo();
}
function editTodo(index) {
    let edited = prompt('enter updated value');
    todo.splice(index,1,edited);
    printTodo();
}