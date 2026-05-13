console.log("===Arithematic Operator===");
let a = 10;
let b = 5;

console.log("Addition:" , a+b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Power:", a ** b);


console.log("\n===== Assignment Operators =====");

let x = 5;

x += 2;
console.log("x += 2 :", x);

x -= 1;
console.log("x -= 1 :", x);

x *= 3;
console.log("x *= 3 :", x);


console.log("\n===== Comparison Operators =====");

console.log("10 > 5 :", 10 > 5);
console.log("10 < 5 :", 10 < 5);
console.log("10 == '10' :", 10 == "10");
console.log("10 === '10' :", 10 === "10");
console.log("10 != 5 :", 10 != 5);


console.log("\n===== Logical Operators =====");

let age = 20;
let hasLicense = true;

console.log("age > 18 && hasLicense :", age > 18 && hasLicense);
console.log("age < 18 || hasLicense :", age < 18 || hasLicense);
console.log("!hasLicense :", !hasLicense);


console.log("\n===== Increment / Decrement =====");

let num = 5;

num++;
console.log("After Increment:", num);

num--;
console.log("After Decrement:", num);


console.log("\n===== String Operator =====");

let firstName = "Monika";
let lastName = "Jadhav";

console.log("Full Name:", firstName + " " + lastName);


console.log("\n===== Ternary Operator =====");

let marks = 75;

let result = marks >= 40 ? "Pass" : "Fail";

console.log("Result:", result);


console.log("\n===== typeof Operator =====");

console.log(typeof firstName);
console.log(typeof marks);
console.log(typeof hasLicense);
