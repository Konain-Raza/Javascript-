var x; // Hoisting is the concept where variable declarations are moved to the top of their scope during compilation. So, the declaration of 'x' is moved to the top, making 'x' available throughout the scope but without an assigned value yet.
console.log(x); // Output: undefined. Since only the declaration is hoisted, and no value is assigned yet, 'x' is 'undefined' at this point.
x = 5; // Initialization still happens here. 'x' is assigned the value 5 here, but this assignment does not affect the hoisting behavior.
