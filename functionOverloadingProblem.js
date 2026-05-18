//Unlike other programming languages, JavaScript Does not support Function Overloading.

function fool(arg1) {
    console.log(arg1);
}

/* The above function will be
   overwritten by the function 
   below, and the below function 
   will be executed for any number
   and any type of arguments */
function fool(arg1, arg2) {
    console.log(arg1, arg2);
}

// Driver code
fool("Welcome")

//JavaScript does not natively support function overloading.
//In the above example, the second function foo(arg1, arg2) 
// overwrites the first function foo(arg1). When you call foo("Geeks"), 
// the function with two parameters is called, but the second argument remains undefined because 
// only one argument was passed