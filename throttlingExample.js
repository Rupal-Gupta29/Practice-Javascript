let btn = document.getElementById("btn");

function throttledFetch(fn, delay) {
  let lastRun = 0;
  return function () {
    const now = new Date();
    if (now - lastRun >= delay) {
      lastRun = now;
      fn();
    }
  };
}

function fetchData() {
  setTimeout(() => {
    console.log("Data fetched!");
  }, 2000);
}

const throttledFn = throttledFetch(fetchData, 3000);

btn.addEventListener("click", () => {
  throttledFn(fetchData, 3000);
});
