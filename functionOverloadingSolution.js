class Calculator {

    add(a, b) {

        // If only 1 argument
        if (b === undefined) {
            console.log("One argument function");
            return a;
        }

        // If 2 arguments
        else {
            console.log("Two argument function");
            return a + b;
        }
    }
}

// Create object
let obj = new Calculator();

// Calling with 1 argument
console.log(obj.add(5));

// Calling with 2 arguments
console.log(obj.add(5, 10));
