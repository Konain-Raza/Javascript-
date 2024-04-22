// Arrow functions are a shorter way to write functions. 
// Their syntax consists of 'const', the function name (if any), parameters, the fat arrow '=>', and the function body in curly braces.
// Arrow functions are called just like normal functions.

// Normal function
function add(x, y) {
    return x + y;
}

// Arrow function
const AddNumbers = (x, y) => {
    return x + y;
};

// Calling the function
console.log(AddNumbers(5, 10)); // Function called
