// this loop is same like while loop but there is one change while only runs when condition is true but in this loop it runs one time even if condition is wrong 
// do {
//     // loop body
//   while (condition to terminate the loop);

let i = 0; //iteration varibale initilization
do{
    //body of the loop
    console.log(`current value of i is ${i}`); //it runs even the value of is is 0 it is the behaviour of thi loop
    console.log("run");
}while(i===5)// condition to terminate the loop