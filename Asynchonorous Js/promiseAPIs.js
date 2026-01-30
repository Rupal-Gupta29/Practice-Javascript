let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 resolved.");
    // reject("P1 rejected.");
  }, 2000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 resolved.");
    // reject("P2 rejected.");
  }, 4000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P3 resolved.");
    reject("P3 rejected.");
  }, 1000);
});

// Promise.all - waits for all the promises to succeed. Fails if any fails.

Promise.all([p1, p2, p3])
  .then((res) => console.log("Promise.all---", res))
  .catch((err) => console.log("Promise.all---", err));

// Promise.allsettled - waits for all the promises to be settled. Returns every result irrespective of success or failure.

Promise.allSettled([p1, p2, p3])
  .then((res) => console.log("Promise.allSettled---", res))
  .catch((err) => console.log("Promise.allSettled---", err));

// Promise.race - returns first settled promise (can be fufilled or rejected).

Promise.race([p1, p2, p3])
  .then((res) => console.log("Promise.race---", res))
  .catch((err) => console.log("Promise.race---", err));

// Promise.any - returns first fullfilled promise, ignore failures. If all promises failed, returns aggregated error.

Promise.any([p1, p2, p3])
  .then((res) => console.log("Promise.any---", res))
  .catch((err) => console.log("Promise.any---", err));
