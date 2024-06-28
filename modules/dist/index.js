"use strict";
function Greet(greeting, ...names) {
    return greeting + " " + names.join(", ") + "!";
}
Greet("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"
Greet("Hello"); // returns "Hello !"
