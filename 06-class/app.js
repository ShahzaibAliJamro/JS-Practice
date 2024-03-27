// var input1 = document.querySelector('.input1')
// var input2 = document.querySelector('.input2')
// var input3 = document.querySelector('.input3')
// var input4 = document.querySelector('.input4')
// var input5 = document.querySelector('.input5')

// function dataInput(){
//     console.log(input1.value);
//     console.log(input2.value);
//     console.log(input3.value);
//     console.log(input4.value);
//     console.log(input5.value);
// }









// var para = document.querySelector("#para")
// function list() {
//     para.innerHTML = "change through js"
// }
// list()




// var input = document.querySelector("#input")
// function inputtext() {
//     console.log(input.value);
//     input.value = ""
// }






var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var input3 = document.querySelector('#input3');
var input4 = document.querySelector('#input4');
var marks = document.querySelector('#marks');
var Grade = document.querySelector('#grade');
var percent = document.querySelector('#percentage');
function getValue() {
    var totalMarks = 400;
    var obtainedMarks = +input1.value + +input2.value + +input3.value + +input4.value;
    var percentage = obtainedMarks/totalMarks*100;
    marks.innerHTML = obtainedMarks;
    percent.innerHTML = percentage;
    if(percentage<33){
        Grade.innerHTML = "FAIL";
    }else if(percentage>=33 && percentage<40){
        Grade.innerHTML = "E";
    }else if(percentage>=40 && percentage<50){
        Grade.innerHTML = "D";
    }else if(percentage>=50 && percentage<60){
        Grade.innerHTML = "C";
    }else if(percentage>=60 && percentage<70){
        Grade.innerHTML = "B";
    }else if(percentage>=70 && percentage<80){
        Grade.innerHTML = "A";
    }else if(percentage>=80 && percentage<90){
        Grade.innerHTML = "A+";
    }else if(percentage>=90 && percentage<=100){
        Grade.innerHTML = "A++";
    }else{
        Grade.innerHTML = "A++";
    }
}










































