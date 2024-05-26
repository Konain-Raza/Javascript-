
const numbers = [65, 44, 12, 4];

// Define a function to be applied to each element of the array
function multiplyByTen(num) {
  return num * 10;
}

// Use the map method to apply the function to each element of the array
const newArr = numbers.map(multiplyByTen);

console.log(newArr); // Output: [650, 440, 120, 40]
