let person = {
  name: "John",
  age: 34,
};

let personProxy = new Proxy(person, {
  set(obj, prop, value) {
    switch (prop) {
      case "name":
        if (typeof value !== "string") {
          throw new Error("Please input valid string.");
        }
        break;
      case "age":
        if (typeof value !== "number") {
          throw new Error("Age must be a number.");
        }
        if (value <= 0) {
          throw new Error("Age must be greater than 0.");
        }
        break;
      default:
        console.log("Property does not exists.");
    }
    // obj[prop] = value;
    Reflect.set(obj, prop, value);
  },
});

console.log(person);
personProxy.age = 5;
console.log(person);
