let myList = document.getElementById("my-list");
let lastListItem = myList.querySelector("li:last-child");

let observer = new IntersectionObserver((entries, observer) => {
  if (entries[0].isIntersecting) {
    loadMoreElements();
    observer.unobserve(entries[0].target);
    observer.observe(document.querySelector("ul li:last-child"));
  }
}, {});

observer.observe(lastListItem);

function loadMoreElements() {
  for (let i = 0; i < 20; i++) {
    let li = document.createElement("li");
    li.textContent = "New Item";
    myList.appendChild(li);
  }
}

// I observe the last list item, load more data when it becomes visible, unobserve the old item, and then observe the new last item to create infinite scrolling.
