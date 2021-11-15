// const bills=[50,100,150,200];
// console.log("fixed bills are as follows ",bills);
// let indexVal = bills.indexOf(150);
// // console.log("index value of bill is ",indexVal);
// let bill = bills[indexVal];
// console.log("Your Bill value is ",bill);
// if(bill<100){
//     console.log("GST is 15%")
//     let gst= (bill*15)/100;
//     console.log("GST value is",gst)
//     bills[indexVal]=bill+gst;
//     console.log("final bill list is",bills);
// }
// else{
//     console.log("GST is 20%");
//     let gst = (bill*20)/100;
//     console.log("GST value is",gst);
//     bills[indexVal]=bill+gst;
//     console.log("final bill list is",bills);
// }

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
