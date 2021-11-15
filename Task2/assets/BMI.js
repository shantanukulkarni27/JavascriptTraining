var height =  1.8;
var weight = 75;
function bmicalc(w,h){
    let bmi = w/(h**2);
    return bmi;
}
let bmi = bmicalc(weight,height);
console.log(`Your BMI is ${bmi}`);