// let grade = 'A';
// switch (grade) {
//     case 'A':
//         console.log('malik ache marks aye hein');
//         break;
//     case 'B':
//         console.log('pass hogaya hun');
//         break;
//     default:
//         console.log('parhai karlo');
//         break;
// }



// let str = 'Cristiano'.toLowerCase();
// console.log(str);
// let string = str.slice(2);
// let string2 = str.charAt(str.length-1);
// console.log(string2);
// console.log(string);

// let str = 'Lionel Messi'.toLowerCase();
// let str2 = str.split(' ');
// console.log(str);
// let str3 = str2[0].slice(0,1).toUpperCase();
// let str4 = str2[0].slice(1);
// let str5 = str2[1].slice(0,1).toUpperCase();
// let str6 = str2[1].slice(1);
// let finalStr = str3.concat(str4)+' '+str5.concat(str6);
// console.log(finalStr);


// let text = 'World War II';
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//     text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
// }
// console.log(text);

// let text = 'I think Ronaldo is the greatest player of all time';
// // for (let i = 0; i < text.length; i++) {
// //     if (text.slice(i, i + 7) === 'Ronaldo') {
// //         text = text.slice(0, i) + 'Messi' + text.slice(i + 12);
// //     }
// // }
// // console.log(text);
// // let startNum = text.indexOf('Ronaldo');
// // if (startNum != -1) {
// //     text = text.slice(0,startNum) + 'Messi' + text.slice(startNum+7)
// // }
// // console.log(text);
// let text2 = text.replaceAll('Ronaldo', 'Messi');
// console.log(text);
// console.log(text2);

// let randomNumber = Math.random()*6;
// let randomNumber2 = Math.round(randomNumber);
// console.log(randomNumber2);

// let num = +'1,399'.replace(',','');
// console.log(num);
// console.log(typeof(num));
// const number = 13.59999999999945454545454545454;
// console.log(number.toFixed(2));

// setInterval(function () {
//     const rn = new Date();
//     console.log(rn);
// }, 1000);
const current = new Date();
const date = current.getDate().toString();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day = current.getDay().toString();
for (let i = 0; i < daysOfWeek.length; i++) {
    if (day === `${i}`) {
        day = daysOfWeek[i];
    }
}
let month = +current.getMonth();
const monthsOfYear = [
    'January', 'February', 'March', 'April', 
    'May', 'June', 'July', 'August', 
    'September', 'October', 'November', 'December'
];
for (let i = 0; i < monthsOfYear.length; i++) {
    if (month === i) {
        month = monthsOfYear[i];
    }
}
const year = +current.getFullYear();
console.log(date);
console.log(day);
console.log(month);
console.log(day + '/' + date + '/' + month + '/' + year);