// const div = document.querySelector('div');
// const div2 = document.querySelector('.div');

// function changeDivColor(event) {
//     event.target.style.backgroundColor = 'red';
//     event.target.style.width = '200px';
//     event.target.style.height = '200px';
// }

// div.addEventListener('click', changeDivColor);

const form = document.querySelector('.form');
const user = document.querySelector('.user');
const pass = document.querySelector('.pass');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(user.value);
    console.log(pass.value);
})