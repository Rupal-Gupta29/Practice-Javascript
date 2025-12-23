Array.prototype.myMap = function (callback) {
  if (!(typeof callback === "function")) {
    throw new Error("Callback is not a function");
  }
  let inpArray = this;
  let resArray = [];
  for (let i = 0; i < inpArray.length; i++) {
    let res = callback(inpArray[i], i, inpArray);
    resArray.push(res);
  }
  return resArray;
};

let nums = [1, 2, 3, 4, 5];
let result = nums.myMap((value, index, array) => {
  return value * value;
});
console.log(result);
