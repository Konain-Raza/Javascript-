let num = Number(prompt("Enter a number: "));
document.write("Result: <br>");
document.write(`The value of a is: ${num} <br>`);
document.write(`...............................<br>`);
document.write(`The value of ++a is: ${++num} <br>`);
document.write(`Now the value of a is: ${num} <br><br>`);
document.write(`The value of a++ is: ${num++} <br>`);
document.write(`Now the value of a is: ${num} <br><br>`);
document.write(`The value of --a is: ${--num} <br>`);
document.write(`Now the value of a is: ${num} <br><br>`);
document.write(`The value of a-- is: ${num--} <br>`);
document.write(`Now the value of a is: ${num} <br><br>`);

//Answer-2
//Answer-3
let name = prompt("Enter your Name: ");
alert(`Welcome ${name}`);

//Answer-4
let tableNumber =prompt("Enter a number: ");
for(let i =1; i<=10; i++){
    if(tableNumber.length<=0){
        tableNumber=5;
        document.write(`${tableNumber} x ${i} = ${tableNumber*i}<br>`);
    }
    else{
        
        document.write(`${tableNumber} x ${i} = ${tableNumber*i}<br>`);

    }
}