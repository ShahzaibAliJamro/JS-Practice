let num;
let heading = document.querySelector(".heading");
function toss(value) {
    num = Math.ceil(Math.random(num)*2);
    if (num === 1 && value === 1) {
        heading.innerHTML = "It's heads, you won";
    }else if (num === 2 && value === 1) {
        heading.innerHTML = "It's tails, you lost";
    }
    if (num === 2 && value === 2) {
        heading.innerHTML = "It's tails, you won";
    }else if (num === 1 && value === 2) {
        heading.innerHTML = "It's heads, you lost";
    }
}