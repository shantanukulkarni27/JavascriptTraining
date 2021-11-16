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

//BMI calculator
var height =  1.8;
var weight = 75;
function bmicalc(w,h){
    let bmi = w/(h**2);
    return bmi;
}
let bmi = bmicalc(weight,height);
console.log(`Your BMI is ${bmi}`);

//Array Reverse 
const arr = [10, 20, 30, 40, 50];
console.log("Initial array is ", arr);
var revArray = [];
const rev = (arr) => {
    for (i = arr.length-1; i >= 0; i--){
        var temp = arr[i];
        revArray.push(temp);
    }
}
rev(arr);
console.log("Reversed array is ",revArray);

//Tip calculator
let bills = [50,100,150,200,250,300];
console.log("fixed bills are as follows",bills);
let tip =[];
let total =[];
const tipCalc = (bills)=>{
    for(let i=0;i<bills.length;i++){
       if(bills[i]<=100){
        tip.push(bills[i]*0.15);
        total.push(bills[i]+(bills[i]*0.15))
       }else{
        tip.push(bills[i]*0.20);
        total.push(bills[i]+(bills[i]*0.20))
       }
    }
}
tipCalc(bills);
console.log("tips are",tip);
console.log("total bills are as follows ",total);