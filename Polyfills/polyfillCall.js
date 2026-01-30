//call

let person1 = {
  name: "John Doe",
};

let person2 = {
  name: "David Jacobs",
};

function printAge(age) {
  console.log(`${this.name} is ${age} years old.`);
}

printAge.call(person1, 45);
printAge.call(person2, 23);

//myCall

Function.prototype.myCall = function (obj, ...args) {
  if (typeof this !== "function") {
    throw new Error("Not callable.");
  }
  console.log(this);
  obj.fnc = this;
  obj.fnc(...args);
};

printAge.myCall(person1, 11);
