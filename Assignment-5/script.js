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

