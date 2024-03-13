// fruits.splice(2,2);
// fruits.pop();
// console.log(fruits);
const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grape' , 'Strawberry'];
const input = document.querySelector('#input');
function shop(){
    if(fruits.includes(input.value)){
        console.log(`thik he bhai`);
    }else{
        console.log(`maa chudi pari he`);
    }
}