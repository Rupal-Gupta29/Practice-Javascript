// Simplest Example

function addToCart() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      //Promise = a container, Async behavior = comes from something else
      res("cart123");
    }, 1000);
  });
}

function makePayment() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(10990);
    }, 1000);
  });
}

function generateInvoice() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("invoice generated");
    }, 1000);
  });
}

addToCart()
  .then((cart) => makePayment(cart))
  .then((billAmt) => generateInvoice(billAmt))
  .catch((err) => console.log(err));

// Another Example

function getUser(userID) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("User fetched.");
      let user = { userId: 1, userName: "Rupal" };
      res(user.userId);
    }, 1000);
  });
}

function getEnrolledCourse(userID) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Course fetched.");
      let course = { courseId: 101, courseName: "Javascript" };
      res(course.courseId);
    }, 1000);
  });
}

function getCourseFeeStatus(courseID) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Status fetched.");
      res("PAID!");
    }, 1000);
  });
}

getUser(1)
  .then((userID) => getEnrolledCourse(userID))
  .then((courseID) => getCourseFeeStatus(courseID))
  .then((status) => console.log(status))
  .catch((err) => console.log(err));
