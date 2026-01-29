// Simplest Example

function addToCart() {}

function makePayment() {}

function generateInvoice() {}

// Dependent on each other

// addToCart();
// makePayment();
// generateInvoice();

addToCart(() => {
  makePayment(() => {
    generateInvoice();
  });
});

// Another Example

function getUser(userID, callback) {
  setTimeout(() => {
    console.log("User fetched");
    let user = { id: 1, name: "Rupal" };
    callback(user.id);
  }, 1000);
}

function getEnrolledCourse(userID, callback) {
  setTimeout(() => {
    console.log("Enrolled course details fetched");
    let enrolledCourse = { courseID: 101, courseName: "Javascript" };
    callback(enrolledCourse.courseID);
  }, 1000);
}

function getCourseFeeStatus(courseID, callback) {
  setTimeout(() => {
    console.log("Fees paid!");
    callback("Paid!");
  }, 1000);
}

getUser(1, function (userID) {
  getEnrolledCourse(userID, function (courseID) {
    getCourseFeeStatus(courseID, function (status) {
      console.log(status);
    });
  });
});
