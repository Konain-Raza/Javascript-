// For conditions in programming, we use if-else and else.

var age = 18; // Created a variable.
if (age < 18) { // Check if age is less than 18. If true, execute this block. The condition returns true/false, as checked by 'age < 18'. For example, '18 < 18' is false, so it returns false. 'if' works when the condition is true.
    console.log("You are not eligible to vote."); // Executes if 'age < 18'.
} else if (age == 18) { // We can also create additional conditions. This is a conditional ladder with 'if' checking first, 'else if' checking afterward.
    console.log("You are eligible to vote.");
} else { // Default case. Executes if none of the 'if' or 'else if' conditions are met.
    console.log("Enter your age to check if you're eligible or not.");
}
