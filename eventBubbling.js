let grandParent = document.getElementById("grandParent");
let parent = document.getElementById("parent");
let child = document.getElementById("child");

grandParent.addEventListener("click", (e) => {
  console.log("GrandParent clicked");
});

parent.addEventListener("click", (e) => {
  console.log("Parent clicked");
});

child.addEventListener("click", (e) => {
  console.log("Child clicked");
  //   e.stopPropagation();
});
