let cache = {};

function compute(a, b) {
  console.log("Computing...");
  return (a * b) ** 10;
}

function memoizedCompute(a, b) {
  let key = `${a}:${b}`;
  if (!(key in cache)) {
    let result = compute(a, b);
    cache[key] = result;
    return result;
  } else {
    console.log("Result from cache.");
    return cache[key];
  }
}

console.log(`1:2 - ${memoizedCompute(1, 2)}`);
console.log(`1:2 - ${memoizedCompute(1, 2)}`);
console.log(`3:4 - ${memoizedCompute(3, 4)}`);
