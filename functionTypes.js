//named function
function greet(){
    return "Hello!";
}
console.log(greet());

console.log("----------------------------------------------");
//2.Anonymous function
const greet1 = function(){
    return "Hi from greet1!!!!";
}
console.log(greet1());

console.log("----------------------------------------------");
//3.Function expression
const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3));
console.log("----------------------------------------------");
//4.Arrow function =>
const square = n => n * n;
console.log(square(4));

console.log("----------------------------------------------");
//5.immediately invoked function expression
(function (){
    console.log("this run immediately!");
}) ();

console.log("----------------------------------------------");
//6.callback function
function num(n, callback) {
    return callback(n);
}
const doubleNum = (n) => n * 2;
console.log(num(5, doubleNum));


console.log("----------------------------------------------");
//7.constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const user = new Person("Neha", 22);
console.log(user.name);


console.log("----------------------------------------------");
//8.Async function: Functions that handle asynchronous tasks. 
// Declared with async, they return a Promise, 
// and you can use await inside them to pause until another Promise resolves.

async function fetchData() {
  return "Data fetched!";
}
fetchData().then(console.log);


console.log("----------------------------------------------");
//9.Generator function
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numbers();
console.log(gen.next().value); 
console.log(gen.next().value);


console.log("----------------------------------------------");
//10.recursive function
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));


console.log("----------------------------------------------");
//Higher order function
function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
}
const double = multiplyBy(2);
console.log(double(5));


console.log("----------------------------------------------");
//12.nested function
function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}
const addTen = outerFun(10);
console.log(addTen(5));


console.log("----------------------------------------------");
//13.pure function
function pureAdd(a, b) {
    return a + b;
}
console.log(pureAdd(2, 3));

console.log("----------------------------------------------");
//14.rest parameter function
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));

console.log("----------------------------------------------");