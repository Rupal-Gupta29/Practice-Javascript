Array.prototype.myFilter = function (callback) {
  let inpArray = this;
  let resArray = [];
  for (let i = 0; i < inpArray.length; i++) {
    let res = callback(inpArray[i], i, inpArray);
    if (res === true) {
      resArray.push(inpArray[i]);
    }
  }
  return resArray;
};

let numbers = [23, 45, 76, 58, 90, 21, 44];

let evenArr = numbers.myFilter(
  (currentValue, index, arr) => currentValue % 2 === 0
);
console.log(evenArr);
