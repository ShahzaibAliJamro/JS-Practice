const form = document.querySelector('.form');
const user1 = document.querySelector('.user1');
const user2 = document.querySelector('.user2');
const email = document.querySelector('.email');
const pass1 = document.querySelector('.pass1');
const pass2 = document.querySelector('.pass2');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('name ==> ' + user1.value+user2.value);
    console.log('email ==> ' + email.value);
    if (pass1.value === pass2.value) {
        console.log('password ==> ' + pass1.value);
    }else{
        alert('passwords dont match');
    }
    user1.value = '';
    user2.value = '';
    email.value = '';
    pass1.value = '';
    pass2.value = '';
})