(function() {
    // This is an Immediately Invoked Function Expression (IIFE). 
    // We create an anonymous function here because this function is destroyed after running, along with its data.
    var randomNumber = Math.random(); // Here, we use the random function which gives a random number between 0 and 1 in decimals.
    console.log("Random Number:", randomNumber);
})();

console.log(randomNumber); // Here, the value is not random because the IIFE function runs at this compile line and gets destroyed, 
                           // which is why its variable is not accessible.
