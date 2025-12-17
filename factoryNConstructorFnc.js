// Factory Function

function createUser(id, name, age) {
  return {
    id,
    name,
    age,
  };
}

const user1 = createUser(1, "Rupal", 20);
const user2 = createUser(2, "John", 23);
console.log(user1);
console.log(user2);

// Constructor Function

function createEmployee(name, salary) {
  this.name = name;
  this.salary = salary;
}

const e1 = new createEmployee("David", 56000);
const e2 = new createEmployee("Harper", 87000);
console.log(e1);
console.log(e2);

// Instead of creating constructor function we should create class (Modern approach)

class Citizen {
  constructor(name, adhar) {
    this.name = name;
    this.adhar = adhar;
  }
}

const c1 = new Citizen("Jose", 1022039232);
console.log(c1);
