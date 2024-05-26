let fruits = ["banana", "apple", "oranges", "pears"];

// The forEach method takes three arguments: first function, index (optional), and array of current elements (optional).
fruits.forEach(function(fruit, index, array) {
    // console.log(fruit, index, array)
    fruits[index] = " "; // The forEach method changes and works on the original array. We can perform any operation within this function, and both index and array are optional. Index is used for traversing the array, and the array is used to store current elements.
});

console.log(fruits);
