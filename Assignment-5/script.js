//Answer-1
let num_1 = Number(prompt("Enter 1st Number: "));
let num_2 = Number(prompt("Enter 2nd Number: "));
let sum;
sum = num_1 + num_2;
document.write(`Sum of ${num_1} and ${num_2} is ${sum}<br>`);

//Answer-2  
let subtraction = num_1 - num_2;
document.write(`Subtraction of ${num_1} and ${num_2} is ${subtraction}<br>`);
let multiplication = num_1 * num_2;
document.write(`Muliplication of ${num_1} and ${num_2} is ${multiplication}<br>`);
let division = num_1 / num_2;
document.write(`Division of ${num_1} and ${num_2} is ${division}<br>`);
let modulus = num_1 % num_2;
document.write(`Modulus of ${num_1} and ${num_2} is ${modulus}<br>`);

//Answer-3
let variable;
document.write(`Value after variable declaration is ${variable}<br>`);
variable = 5;
document.write(`Initial Value is ${variable}<br>`);
variable++;
document.write(`Value after increment is ${variable}<br>`);
variable = variable + 7;
document.write(`Value after addition is ${variable}<br>`);
variable--;
document.write(`Value after decrement is ${variable}<br>`);
variable= variable%3;
document.write(`The Remainder is ${variable}`);

//Answer-4
movieTicketPrice = 600;
document.write(`Total cost to buy 5 Tickets to a movie is ${movieTicketPrice*5}<br>`);

//Answer-5
table = Number(prompt("Enter a number to print its table: "));
document.write(`Table of ${table}: <br>`)
for (let i = 1; i <= 10; i++) {
    document.write(`${table} x ${i} = ${table*i}<br>`);
}

//Answer-6
let celsius = 25;
let fahrenheit = 5.4;
let celsiusTOFahreneight = (fahrenheit-32) * 5/9;
let FahreneightTOCelsius = (celsius * 5/9) * 32;
document.write(` ${celsius}°C is ${celsiusTOFahreneight}°F<br>`);
document.write(` ${fahrenheit}°F is ${FahreneightTOCelsius}°C <br>`);

//Answer-7

let item1 = {
    price: 650,
    quantity: 3,

}

let item2 = {
    price: 100,
    quantity: 7,

}
let shippingCharges = 100;
document.write(`<h1>Shopping Cart</h1>. <br>`)

document.write(`Price of Item 1 is ${item1.price}.<br> `)
document.write(`Quantity of Item 1 is ${item1.quantity}.<br> `)
document.write(`Price of Item 2 is ${item2.price}.<br> `)
document.write(`Quantity of Item 2 is ${item2.quantity}.<br> `)
document.write(`Shipping Address ${shippingCharges }.<br> `)
document.write(`Total Cost of an order is ${item1.price*item1.quantity+ item2.price*item2.quantity+shippingCharges}<br> `)
//Answer-8
let totalMarks =980;
let obtainedMarks= 804;
document.write(`<h1>Marksheet</h1>. <br>`)

document.write(`Total Marks: ${totalMarks}. <br>`)
document.write(`Obtained Marks: ${obtainedMarks}. <br>`)
document.write(`Percentage: ${obtainedMarks/totalMarks*100}%. <br>`)

//Answer-9
let usDollars = 10;
let saudiRiyaals = 25;
document.write(`<h1>Currency in PKR</h1>. <br>`)
document.write(`Total Currency in PKR: ${usDollars*saudiRiyaals}. <br>`)

//Answer-10

let num = 10;
let result =((num+5*num*10))/2;

//Answer-11

let currentYear = 2024;
let birthYear = 2004;
let age = currentYear - birthYear;

document.write(`<h1>Age Calculator</h1><br>`)
document.write(`Current Year: ${currentYear}<br>`);
document.write(`Birth Year: ${birthYear}<br>`);
document.write(`Your Age is: ${age} or ${age-1}<br>`);

//Answer-12

let radius = 20;
document.write(`<h1>The Geometrizer</h1>`)

document.write(`The Circumference is ${2 * 3.14 * radius}<br>`);
document.write(`The Area is ${3.14 * radius*radius}<br>`);

//Answer-13
let favouriteSnack = "Lays";
let estimatedAge = 90;
let amountPerDay = 3;
document.write(`<h1>The Lifetime Supply Calculator</h1><br>`)
document.write(`Favourite Snack: ${favouriteSnack} <br>`)
document.write(`Current Age: ${age} <br>`)
document.write(`Estimated Age: ${estimatedAge}<br>`)
document.write(`Amount of snacks per day: ${amountPerDay} <br>`)
document.write(`YOu will need ${(estimatedAge-age)*amountPerDay} ${favouriteSnack} to last you unitl ripe old age of ${estimatedAge}<br>`)
