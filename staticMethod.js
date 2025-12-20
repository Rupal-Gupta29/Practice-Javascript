class Emp {
  constructor(name, email, salary) {
    if (!Emp.isValidEmail(email)) {
      throw new Error("Invalid email.");
    }
    this.name = name;
    this.email = email;
    this.salary = salary;
  }

  static isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  incrementSal(percent) {
    this.salary = this.salary + (percent / 100) * this.salary;
    return this.salary;
  }
}

const e1 = new Emp("John", "John@yahoo.com", 58000);
console.log(e1);
console.log("Incremented Salary: ", e1.incrementSal(10));
