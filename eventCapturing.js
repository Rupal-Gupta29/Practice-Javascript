let grandParent = document.getElementById("grandParent");
let parent = document.getElementById("parent");
let child = document.getElementById("child");

grandParent.addEventListener(
  "click",
  (e) => {
    console.log("GrandParent clicked");
  },
  true
);

parent.addEventListener("click", (e) => {
  console.log("Parent clicked");
});

child.addEventListener("click", (e) => {
  console.log("Child clicked");
  //   e.stopPropagation();
});

// When you click the child element, the event first goes through the capturing phase (top → bottom).
// Since the grandParent listener is registered with capture: true, it runs during the capturing phase.
// Then the event moves to parent, but parent does not have a capturing listener, so nothing runs there.
// It continues down to the child. After reaching the target (child), the event enters the bubbling phase (bottom → top).
// So first the child's listener runs, then the parent's bubbling listener runs, and finally the event reaches the grandParent bubbling listener (which does not exist).
