function sum (num1 , num2){
    console.log(num1 + num2);
}
sum(149 , 51);






function myName (){
    console.log('My name is Shahzaib');
    return 20 + 20 ;
}

var name1 = myName();
console.log(name1);




function percentageCalculator (marks1 , marks2, marks3, marks4, marks5){
    var totalMarks = 500;
    var obtainedMarks = marks1 + marks2 + marks3 + marks4 + marks5 ;
    return obtainedMarks / totalMarks * 100;
}
var shahzaibPercentage = percentageCalculator(100,59,20,20,20);
console.log(shahzaibPercentage);








var para = document.querySelector('.hello');
console.log(para.innerHTML);

function switch1(){
    if(para.innerHTML === 'changed'){
        para.innerHTML = 'Hello JS';
    }
    else{
        para.innerHTML = 'changed';
    }
}