let chars = ["a","b","c"];

console.log("Array is ",chars);

//Array length
let charLength = chars.length;
console.log("The length of array is ",charLength);

//Index Of
let indVal = chars.indexOf("b");
console.log("Index value of b is ",indVal); 

//Includes
console.log("Does C includes?",chars.includes("c"));
console.log("Does C includes?",chars.includes("f"));

//Push
chars.push("d");
console.log("array after pushed value is",chars);

//Unshift
chars.unshift("x");
console.log("after unshift",chars);

//pop
let pops = chars.pop();
console.log("afetr pop  ",chars);

//shift
chars.shift();
console.log("after shift",chars);

//map
let data = [10,20,30,40];
console.log("Original array is",data);
let mData = data.map(mData=>mData*2);
console.log("mapped array is ",mData);

//forEach
 let temparr = [20,30,40,50];
 let data1 = temparr.forEach(data1=>{
     data1=data1+30;
     console.log("data in forEach is ",data1)
 })

 


