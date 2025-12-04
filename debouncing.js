let inp = document.getElementById("inp");

inp.addEventListener("keyup", (e) => {
  debouncedFunction(e.target.value);
});

function search(query) {
  console.log(`Searching for ${query}...`);
}

function debounce(fnc, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fnc(...args);
    }, delay);
  };
}

let debouncedFunction = debounce(search, 2000);
