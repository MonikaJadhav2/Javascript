function greet(name) {   // 'name' is a parameter
  console.log("Hello " + name);
}

greet("Alice");  // "Alice" is the argument

//derfault parameters
function greet1(name = "Guest"){
    console.log("Hello " + name);
}

greet1();
greet1("Mona");

//return statement
function add(a, b){
    return a+b;
}
let result = add(10, 5);
console.log(result);