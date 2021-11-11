//Age Calculator

var currentYear =2021;
var birthYear = 2001;

function ageCalc(cY,bY){

     console.log(`Your BirthYear is ${bY}`);
     console.log(`Current age is ${cY}`);
     let age = cY-bY;
     return age;
}

let age = ageCalc(currentYear,birthYear);
console.log(`Your age is ${age}`);


