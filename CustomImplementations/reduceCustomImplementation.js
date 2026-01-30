Array.prototype.myReduce = function (callback, initialValue) {
  let inpArray = this;
  let accumulator;
  let startIndex;

  if (initialValue != undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = inpArray[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < inpArray.length; i++) {
    let res = callback(accumulator, inpArray[i], i, inpArray);
    accumulator = res;
  }
  return accumulator;
};

let numbers = [10, 20, 30, 40];

let sum = numbers.myReduce(
  (acc, currentValue, index, array) => (acc += currentValue),
  0
);

console.log(sum);
