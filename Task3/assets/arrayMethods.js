let chars = ["a", "b", "c"];

console.log("Array is ", chars);

//Array length
let charLength = chars.length;
console.log("The length of array is ", charLength);

//Index Of
let indVal = chars.indexOf("b");
console.log("Index value of b is ", indVal);

//Includes
console.log("Does C includes?", chars.includes("c"));
console.log("Does C includes?", chars.includes("f"));

//Push
chars.push("d");
console.log("array after pushed value is", chars);

//Unshift
chars.unshift("x");
console.log("after unshift", chars);

//pop
let pops = chars.pop();
console.log("afetr pop  ", chars);

//shift
chars.shift();
console.log("after shift", chars);

//map
let data = [10, 20, 30, 40];
console.log("Original array is", data);
let mData = data.map(mData => mData * 2);
console.log("mapped array is ", mData);

//forEach
let temparr = [20, 30, 40, 50];
let data1 = temparr.forEach(data1 => {
    data1 = data1 + 30;
    console.log("data in forEach is ", data1)
})
//filter
const words = ['Hills', 'Mountains', 'random', 'create'];
const result = words.filter(word => word.length > 6);

//Sort
let sArr = [20, 40, 10, 30];
console.log("sorted array is ", sArr.sort());

//concat
let string1 = "Hello ";
let string2 = "world!";
let res = string1.concat(string2);

//every
const aboveThreshold = (currentValue) => currentValue > 40;
const belowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log("Above Threshold", array1.every(aboveThreshold));
console.log("below Threshold", array1.every(belowThreshold));

//Some
const even = (element) => element % 2 === 0;
console.log("are there some even",array1.some(even));

//Join
const greet = ['How', 'Are', 'You'];
console.log(greet.join());

//find
const found = array1.find(element => element > 10);
console.log("Reducdes value is",found);

//findIndex
let iVal = sArr.indexOf(40);
console.log("i Value is",iVal);

//fill
console.log(array1.fill(0, 2, 4));

//slice
console.log("initial arary is",sArr);
console.log(sArr.slice(2));