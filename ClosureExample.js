//Example 1

function Outer() {
  let count = 0;
  return function inner() {
    console.log(count);
    count++;
  };
}

let fn = Outer();
fn(); //0
fn(); //1

// Example 2

function greet(name) {
  return function () {
    console.log(`Hello ${name}`);
  };
}

const john = greet("John");
john();

// Example 3

function multiply(x) {
  return function (y) {
    return x * y;
  };
}

let double = multiply(2);
console.log(double(10));

// Notes

// A closure does not always need to return the inner function. Returning the inner function is just one common way to use a closure.

// Example 4

function outerFnc() {
  const secret = "aaGVUT5gbjkKS";
  function innerFnc() {
    console.log(secret);
  }
  innerFnc();
}

outerFnc();
