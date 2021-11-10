var a= "text";
var b = "text";


//Symbol
var sym1 = Symbol("text");
var sym2= Symbol("text");
sym2 = 
console.log(`with variables ${a==b}`);
console.log(`with symbols ${sym1==sym2}`);  //Symbols and Template Strings


//----------Operators-------------//
var x=5;
console.log(`value of x is ${x}`);


//increament

x++;
console.log(`increamented value of x is ${x}`);

//substraction

x-=2;
console.log(`${x}`);

//multiplication
x*=3;
console.log(`$`);



//-----------Functions----------------//
//Arrow function
let c = 7;
let d = 2;

let arr =(a,b) => c%d; 
console.log("reminder is",arr(c,d));


//Function expression
const multi = function(){
    mul = c*d;
    return mul;
}

let m = multi();
console.log("Multiplication is ",m);







