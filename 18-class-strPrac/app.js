const cities = ['karachi', 'islamabad', 'peshawar', 'hyderabad', 'madeira', 'manchester', 'madrid', 'turin','barcelona'];
let input = document.querySelector(".input");
let h1 = document.querySelector(".heading");
function myFunc() {
    for (let i = 0; i < cities.length; i++) {
        if (cities.includes(input.value) === true) {
            h1.innerHTML = "Han bhai miljaiga";
        }
        else{
            h1.innerHTML = "nahin bhai";
        }
    }
}