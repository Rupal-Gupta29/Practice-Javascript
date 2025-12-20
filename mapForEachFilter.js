//map example

let nums = [2, 4, 6, 8, 10, 12];
let squareNums = nums.map((num) => num * num);
console.log(squareNums);

//forEach

let names = ["John", "David", "Jose"];
let ul = document.getElementById("list");
names.forEach((name) => {
  let li = document.createElement("li");
  li.textContent = name;
  ul.appendChild(li);
});

//filter

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let isEven = numbers.filter((num) => num % 2 == 0);
console.log(isEven);
