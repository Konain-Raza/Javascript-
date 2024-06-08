const luckyNumber = Number(prompt("Enter your Lucky Number between 1-5"));

switch (luckyNumber) { 
    // The switch statement is used to perform different actions based on different inputs.
    // Here, 'luckyNumber' is the variable on which the operations are performed.
    
    case 5: // The 'case' keyword is used to define different cases.
        console.log("You won a Bike");
        break; 
        // The 'break' keyword is used to exit the switch block once a case is matched.
        // Without 'break', the code would continue to execute the next case regardless of whether it matches.

    case 1:
        console.log("You won a Washing Machine");
        break;

    case 3:
        console.log("You won a Car");
        break;

    default: 
        // The 'default' case is executed if none of the above cases match.
        console.log("You won nothing");
        break;
}
