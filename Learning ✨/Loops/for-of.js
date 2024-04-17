// for of loop we use to traverse thorugh an array we coomonly used for loop for this but through this loop we easy to write loops and it is used for arrays

const fruits = ["apple", "banana", "orange", "pear", "grapes"]; //created an array 
console.log("Printing Fruits Array")
for (let i of fruits){// we made a variable for iteration/traverse in an array which is i then we write of which is syntax and it increments by + 1 after every excution of loop body and in this loop it reduces the chances of getting error beacuse there is no need of condition beasue it works depending the length of an array and it goes form start to end of an array and we dont need to iterate an i var beacuse it auto increments so it is useful in many cases.
    console.log(i);// printing thorugh taversing an array
}