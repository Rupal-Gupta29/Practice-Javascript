// Apply

let person1 = {
  name: "Jose Aspuru",
};

let person2 = {
  name: "Zee Martinez",
};

function showUserInfo(age, city) {
  console.log(`${this.name} is ${age} years old and lives in ${city}.`);
}

showUserInfo.apply(person1, [10, "Manila"]);

// myApply

Function.prototype.myApply = function (obj, arr) {
  if (typeof this !== "function") {
    throw new Error("Not Callable");
  }
  if (!Array.isArray(arr)) {
    throw new Error("--CreateListFromArrayLike called on non-object");
  }
  obj.fnc = this;
  obj.fnc(...arr);
};

showUserInfo.myApply(person2, [20, "San Dieago"]);
