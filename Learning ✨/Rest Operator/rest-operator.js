function concatAllClasses(...rest){ // Using the rest operator (...) here to gather all arguments into the rest parameter. It collects all elements passed to the function.
    console.log(rest); // Printing all the values stored in the rest parameter to the console.
}

// Initializing two arrays
let ClassOne = ["konain", "ali", "fatima"];
let ClassTwo = ["owais", "saba", "raza"];

// Here we use the spread operator (...) to pass all elements of ClassOne and all elements of ClassTwo individually. If we passed only arrays like ClassOne, it would send the array format.
concatAllClasses(...ClassOne,  ...ClassTwo);
