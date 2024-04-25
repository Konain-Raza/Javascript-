// Recursive functions are those functions that call themselves within their body.
function factorial(n) {
    if (n === 0) {
        return 1; // Here we return 1 because the factorial of 0 is 1, and multiplying by 1 does not change the result.
    } else {
        return n * factorial(n - 1); // Here we call the function recursively. For example, if the input is 5, it computes 5 * 4 * 3 * 2 * 1.
    }
}

console.log(factorial(5));
