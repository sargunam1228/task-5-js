// Part 1 – Basic Functions
// 1 Create a function named welcome() and print "Welcome to JavaScript".
function welcome() {
  console.log("Welcome to JavaScript");
}
welcome();

// 2 Create a function named student() and print your name, age, and city.
function student() {
  console.log("Name: kira");
  console.log("Age: 21");
  console.log("City: Salem");
}
student();

// 3 Create a function named addition() to add two numbers.
function addition() {
  let a = 10;
  let b = 20;
  console.log("Addition:", a + b);
}
addition();

// 4 Create a function named calculator() to perform addition and subtraction.
function calculator() {
  let a = 20;
  let b = 10;
  console.log("Addition:", a + b);
  console.log("Subtraction:", a - b);
}
calculator();

// 5 Create a function named company() and print "Welcome to Stackly".
function company() {
  console.log("Welcome to Stackly");
}
company();

// 6 Create a function named multiplication() to multiply two numbers.
function multiplication() {
  let a = 5;
  let b = 4;
  console.log("Multiplication:", a * b);
}
multiplication();

// 7 Create a function named greeting() and call it three times.
function greeting() {
  console.log("kira!");
}
greeting();
greeting();
greeting();


// Part 2 – Parameters and Arguments
// 8 Create a function that accepts two parameters and prints their addition.
function add(a, b) {
  console.log("Sum:", a + b);
}
add(5, 7);

// 9 Create a function that accepts three parameters and prints all three values.
function showThree(a, b, c) {
  console.log(a, b, c);
}
showThree("JS", 100, true);

// 10 Create a function that accepts employee name and salary and prints them.
function employee(name, salary) {
  console.log("Employee:", name);
  console.log("Salary:", salary);
}
employee("kira", 42000);

// 11 Create a function that accepts three numbers and performs multiplication.
function multiplyThree(a, b, c) {
  console.log("Product:", a * b * c);
}
multiplyThree(2, 3, 4);

// 12 Create a function that accepts your name as an argument and prints a welcome message.
function welcomeUser(name) {
  console.log("Welcome, " + name + "!");
}
welcomeUser("kira");

// 13 Call a function with two arguments when it has three parameters. Observe the output.
function three(a, b, c) {
  console.log(a, b, c);
  console.log(a + b + c);
}
three(1, 2);
// Output: 1 2 undefined
// NaN (c is undefined, so 1 + 2 + undefined = NaN)

// 14 Call a function with three arguments when it has two parameters. Observe the output.
function two(a, b) {
  console.log(a, b);
}
two(1, 2, 3);
// Output: 1 2 (the extra argument 3 is ignored)


// Part 3 – Return Statement
// 15 Create a function that returns the addition of two numbers.
function addReturn(a, b) {
  return a + b;
}
console.log(addReturn(10, 5));

// 16 Create a function that returns the subtraction of two numbers.
function subtractReturn(a, b) {
  return a - b;
}
console.log(subtractReturn(10, 5));

// 17 Create a function that returns the multiplication of two numbers and store the result in a variable.
function multiplyReturn(a, b) {
  return a * b;
}
let result = multiplyReturn(6, 7);
console.log(result);

// 18 Create a function that returns a person's age. Print the returned value outside the function.
function getAge() {
  return 23;
}
console.log("Age:", getAge());

// 19 Create a function that returns the division of two numbers.
function divideReturn(a, b) {
  return a / b;
}
console.log(divideReturn(20, 4));

// 20 Create one function that returns a value and another function that prints that returned value.
function getValue() {
  return 100;
}
function printValue() {
  console.log("Value:", getValue());
}
printValue();


// Part 4 – Scope and Hoisting
// 21 Create a variable using var inside a block and try accessing it outside the block.
// Prediction: works, prints 10 (var ignores block scope)
{
  var x = 10;
}
console.log(x); // 10

// 22 Create a variable using let inside a block and try accessing it outside the block.
// Prediction: ReferenceError: y is not defined
{
  let y = 20;
}
// console.log(y); // uncomment to see the error

// 23 Create a variable using const inside a block and try accessing it outside the block.
// Prediction: ReferenceError: z is not defined
{
  const z = 30;
}
// console.log(z); // uncomment to see the error

// 24 Create a function with a var variable inside it and try accessing that variable outside the function.
// Prediction: ReferenceError: a is not defined
function test() {
  var a = 50;
}
test();
// console.log(a); // uncomment to see the error

// 25 Create a var variable and print it before initialization. Observe the output.
// Prediction: undefined (declaration is hoisted, value is not)
console.log(m); // undefined
var m = 5;

// 26 Create let and const variables and try accessing them before initialization. Observe the result.
// Prediction: ReferenceError: Cannot access 'n' before initialization
// console.log(n); // uncomment to see the error
let n = 5;
// console.log(p); // uncomment to see the error
const p = 10;


// Part 5 – Function Types
// 27 Create a named function that accepts a name and prints it.
function printName(name) {
  console.log(name);
}
printName("kira");

// 28 Create an anonymous function and store it in a variable. Pass your name as an argument.
let showName = function (name) {
  console.log(name);
};
showName("kira");

// 29 Create an arrow function that accepts two numbers and prints their addition.
let addArrow = (a, b) => {
  console.log(a + b);
};
addArrow(10, 20);

// 30 Create three function types
function subtract(a, b) {          
  console.log("Subtraction:", a - b);  // Named function
}

let multiply = function (a, b) { 
  console.log("Multiplication:", a * b);  // Anonymous function
};

let divide = (a, b) => {           
  console.log("Division:", a / b);  // Arrow function
};

subtract(20, 5);  // Call named function
multiply(4, 6);  // Call anonymous function
divide(40, 8);  // Call arrow function