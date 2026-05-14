console.log("===== JAVASCRIPT ARRAYS =====\n");


// ---------------------------------------
// 1. Creating Arrays
// ---------------------------------------

console.log("1. Creating Arrays");

let fruits = ["Apple", "Mango", "Banana"];
console.log("Fruits Array:", fruits);

let numbers = new Array(10, 20, 30);
console.log("Numbers Array:", numbers);


// ---------------------------------------
// 2. Accessing Elements
// ---------------------------------------

console.log("\n2. Accessing Elements");

console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);
console.log("Last Fruit:", fruits[fruits.length - 1]);


// ---------------------------------------
// 3. Modifying Elements
// ---------------------------------------

console.log("\n3. Modifying Elements");

fruits[1] = "Orange";

console.log("Updated Fruits:", fruits);


// ---------------------------------------
// 4. Array Length
// ---------------------------------------

console.log("\n4. Array Length");

console.log("Total Fruits:", fruits.length);


// ---------------------------------------
// 5. Adding Elements
// ---------------------------------------

console.log("\n5. Adding Elements");

// push() -> add at end
fruits.push("Grapes");

// unshift() -> add at beginning
fruits.unshift("Pineapple");

console.log("After Adding:", fruits);


// ---------------------------------------
// 6. Removing Elements
// ---------------------------------------

console.log("\n6. Removing Elements");

// pop() -> remove last
fruits.pop();

// shift() -> remove first
fruits.shift();

console.log("After Removing:", fruits);


// ---------------------------------------
// 7. Loop Through Array
// ---------------------------------------

console.log("\n7. Using for Loop");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// ---------------------------------------
// 8. Using forEach()
// ---------------------------------------

console.log("\n8. Using forEach()");

fruits.forEach(function(item) {
    console.log(item);
});


// ---------------------------------------
// 9. Concatenating Arrays
// ---------------------------------------

console.log("\n9. Concatenating Arrays");

let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node.js", "Express.js"];

let fullstack = frontend.concat(backend);

console.log(fullstack);


// ---------------------------------------
// 10. Array to String
// ---------------------------------------

console.log("\n10. Array to String");

console.log(fullstack.toString());


// ---------------------------------------
// 11. Checking Array Type
// ---------------------------------------

console.log("\n11. Checking Array Type");

console.log(typeof fruits);

console.log(Array.isArray(fruits));

console.log(fruits instanceof Array);


// ---------------------------------------
// 12. Difference Between [5] and new Array(5)
// ---------------------------------------

console.log("\n12. Difference Example");

const a1 = [5];
console.log("a1 =", a1);

const a2 = new Array(5);
console.log("a2 =", a2);


// ---------------------------------------
// 13. Practice Example - Student Marks
// ---------------------------------------

console.log("\n13. Student Marks Example");

let marks = [85, 90, 78, 92];

console.log("Marks:", marks);

console.log("First Mark:", marks[0]);

marks.push(95);

console.log("After Adding New Mark:", marks);


// ---------------------------------------
// 14. Mini Challenge
// ---------------------------------------

console.log("\n14. Mini Challenge");

let colors = ["Red", "Blue", "Green"];

console.log("Original:", colors);

colors.push("Black");

//colors.shift();

console.log("Final Colors:", colors);


// ---------------------------------------
// END
// ---------------------------------------

console.log("\n===== END OF ARRAY PRACTICE =====");