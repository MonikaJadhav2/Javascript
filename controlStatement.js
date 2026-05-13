//
console.log("====if statement====");
const num = 5;

if (num > 0) {
    console.log("The number is positive.");
};

//
console.log("====if-else statement====");
let num2 = -10;

if (num2 > 0)
    console.log("The number is positive.");
else
    console.log("The number is negative");


//
console.log("====switch statement====");
let num1 = 5;

switch (num1) {
    case 0:
        console.log("Number is zero.");
        break;
    case 1:
        console.log("Nuber is one.");
        break;
    case 2:
        console.log("Number is two.");
        break;
    default:
        console.log("Number is greater than 2.");
};


//
console.log("====for loop====");
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
};


//
console.log("====while loop====");
let j = 1;

while (j <= 5) {
    console.log(j);
    j++;
}


//
console.log("====do-while loop====");
let k = 1;

do {
    console.log(k);
    k++;
} while (k <= 5);