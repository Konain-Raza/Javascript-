

// for in loop we used for object traversing just like we want all data of objects like we used to traverse array 

let car = { //we made an object which contains details of an car now we want all its data through loop 
    name: "Picanto",
    color: "blue",
    year: 2020,
    price: 1000000
}

for (let key in car){
    console.log("keys:");// there we get all keys but if we want all values with their keys
    console.log(key);// there we get all keys but if we want all values with their keys
    console.log("keys with its values");// there we get all keys but if we want all values with their keys 
    console.log(`${key}: ${car[key]}`);// there we get all values with their keys car[key] is by which we access all the key valuse of car object.
}