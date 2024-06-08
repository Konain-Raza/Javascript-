//closures are used to hide data and tehy are mostly used in nested finction and pass by ref and value scenarion
function outerFunction() {
    // Logging message indicating the outer function
    console.log("Outer Function / Parent Function");
  
    // Inner function defined inside the outer function and returned
    return function innerFunction() {
      // Logging message indicating the inner function
      console.log("Inner Function / Child Function");
      
      // Innermost function defined inside the inner function (but not accessible)
      return function innerLastFunction() {
        // Logging message indicating the innermost function
        console.log("Innermost Function / Parent Function");
      };
    };
  }
  
  // Calling the outer function and storing the inner function in a variable
  var closureExample = outerFunction();
  
  // Now, the closureExample variable holds a reference to the inner function along with its surrounding scope (outerVariable)
  
  // When we call the closureExample, it still has access to the outerVariable
  closureExample(); // Output: "I am outer!"
  
  // Example of calling the inner function stored in closureExample
  const innerFunction = closureExample();
  innerFunction(); // Output: "Inner Function / Child Function"
  