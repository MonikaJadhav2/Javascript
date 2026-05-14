console.log("===== ADVANCED ARRAY METHODS =====\n");


// ---------------------------------------
// 1. join() Method
// ---------------------------------------

console.log("1. join() Method");

let skills = ["HTML", "CSS", "JavaScript", "React"];

console.log(skills.join(" | "));
console.log(skills.join(" - "));
console.log(skills.join(" , "));


// ---------------------------------------
// 2. delete Operator
// ---------------------------------------

console.log("\n2. delete Operator");

let employee = {
    firstName: "Monika",
    lastName: "Jadhav",
    salary: 50000
};

delete employee.salary;

console.log(employee);


// ---------------------------------------
// 3. flat() Method
// ---------------------------------------

console.log("\n3. flat() Method");

let nestedArray = [
    ["HTML", "CSS"],
    ["JavaScript", ["React", "Node.js"]]
];

let flatArray = nestedArray.flat(Infinity);

console.log(flatArray);


// ---------------------------------------
// 4. splice() Method
// ---------------------------------------

console.log("\n4. splice() Method");

let numbers = [10, 20, 30, 40, 50];

console.log("Original:", numbers);

// Remove elements
numbers.splice(1, 2);

console.log("After Removing:", numbers);

// Insert elements
numbers.splice(1, 0, 25, 35);

console.log("After Inserting:", numbers);


// ---------------------------------------
// 5. slice() Method
// ---------------------------------------

console.log("\n5. slice() Method");

let marks = [85, 90, 78, 92, 88];

let result = marks.slice(1, 4);

console.log("Original Array:", marks);
console.log("Sliced Array:", result);


// ---------------------------------------
// 6. some() Method
// ---------------------------------------

console.log("\n6. some() Method");

let ages = [16, 18, 20, 15];

let check = ages.some(age => age >= 18);

console.log("Any Adult?", check);


// ---------------------------------------
// 7. map() Method
// ---------------------------------------

console.log("\n7. map() Method");

let nums = [1, 2, 3, 4, 5];

let squares = nums.map(num => num * num);

console.log("Original:", nums);
console.log("Squares:", squares);


// ---------------------------------------
// 8. filter() Method
// ---------------------------------------

console.log("\n8. filter() Method");

let evenNumbers = nums.filter(num => num % 2 === 0);

console.log("Even Numbers:", evenNumbers);


// ---------------------------------------
// 9. reduce() Method
// ---------------------------------------

console.log("\n9. reduce() Method");

let total = nums.reduce((sum, num) => sum + num, 0);

console.log("Sum:", total);


// ---------------------------------------
// 10. reverse() Method
// ---------------------------------------

console.log("\n10. reverse() Method");

let cities = ["Pune", "Mumbai", "Delhi"];

cities.reverse();

console.log(cities);


// ---------------------------------------
// 11. values() Method
// ---------------------------------------

console.log("\n11. values() Method");

let fruits = ["Apple", "Mango", "Banana"];

let iterator = fruits.values();

for (let value of iterator) {
    console.log(value);
}


// ---------------------------------------
// 12. Real-Life Example
// ---------------------------------------

console.log("\n12. Student Data Example");

let students = [
    { name: "Monika", marks: 90 },
    { name: "Rahul", marks: 75 },
    { name: "Sneha", marks: 85 }
];

// map()
let studentNames = students.map(student => student.name);

console.log("Student Names:", studentNames);

// filter()
let topper = students.filter(student => student.marks > 80);

console.log("Topper Students:", topper);

// reduce()
let totalMarks = students.reduce((sum, student) => sum + student.marks, 0);

console.log("Total Marks:", totalMarks);


// ---------------------------------------
// 13. practice example
// ---------------------------------------

console.log("\n13. Mini Challenge");

let prices = [100, 200, 300, 400];

// Add GST 18%
let finalPrices = prices.map(price => price + (price * 18 / 100));

console.log("Final Prices:", finalPrices);

// Find expensive products
let expensive = finalPrices.filter(price => price > 300);

console.log("Expensive Products:", expensive);


