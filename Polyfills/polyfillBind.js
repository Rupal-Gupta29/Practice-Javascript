//Bind

let person1 = {
  name: "Ana Gazizova",
};

let person2 = {
  name: "Edson Ramirez",
};

function showAge(age) {
  console.log(`${this.name} is ${age} years old.`);
}

bindedShowAge = showAge.bind(person1, 11);
bindedShowAge();

// myBind

Function.prototype.myBind = function (obj, ...args) {
  if (typeof this !== "function") {
    throw new Error("not callable");
  }
  obj.fnc = this;
  return function (...args1) {
    obj.fnc(...args, ...args1);
  };
};

bindedFnc = showAge.myBind(person2, 22);
bindedFnc(23);
