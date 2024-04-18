// function is used when some block of code we need to write multiple times at multiple places and there are two general type of functions:
// 1. No Parameter Function
// 2. Parameter Function
// now function itself has its definition and call 
// now first understand how to write function definition, its syntax is:
// function functionName (){    now function word is a keyword in js and functionName we write any thing but better practice is write name which has its meaning clear and the next () is brackets is called parameters and inside this we give parameters we see in code 
//}

const trainArrivalTimings = { //created object
    train_1: 12,
    train_2: 1,
    train_3: 13,
}

function markAttendance (trainName){ //created function def
console.log(`${trainName} is present`);
}

function isTrainArrived (trainName, arrivalTime){ //here we make two parameters and it is funciton def now it is imp to write these two argument in funciton call and arguments is in the same place like parameteres but they are alway in function calling.
    if(trainArrivalTimings[trainName]){ //check from object key values
        markAttendance(trainName); //nested functi  on 
        if (trainArrivalTimings[trainName] <= arrivalTime){ //check from object key values
            return `${trainName} is arrived on time` //return value to function
        } else {
            return `${trainName} is not arrived on time`;//return value to function
        }
    }

}

console.log(isTrainArrived("train_1", 12)); //function calling