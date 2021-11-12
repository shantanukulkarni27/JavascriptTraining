const arr = [10,20,30,40,50];
console.log("Initial arrayis ",arr);
var newArr = [];
indexVal = arr.length-1;

for(i=indexVal;i>=0;i--){
   var temp=arr[i];
    newArr.push(temp);
}
console.log("Reversed array is ",newArr);