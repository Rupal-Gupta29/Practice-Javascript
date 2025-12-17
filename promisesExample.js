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
