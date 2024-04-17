// // its synatx is this 
// for (initialization ,condition of terminating the loop, afterthought ) {
//     // body of the loop
//   }
// first interpreter access initialization then condition the body and after body it goes to afterthought part then condition and goes on

let subjects = ["maths", "english", "arts","science"]; //created and array 
let i = 0; //initialization of iteration variable
console.log("Printing the array of subjects");
for(let i=0; i<subjects.length; i++){ // in brackets we first initialize the iteration variable and it has its only loop scope it is used under this  then write condition to when terminate the loop , then after after every time body execute what to do normally we increment or decrement if we do any other hing it also works but it may cause to inifnite runnig of the and our system crashed due to limited resources
    console.log(subjects[i]); //printing the value of array
}