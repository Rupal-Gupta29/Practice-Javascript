function getUser(userId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("User fetched.");
      let user = { userId: 1, userName: "Rupal" };
      res(user);
    }, 1000);
  });
}

function getEnrolledCourse(userId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Course fetched.");
      let course = { courseId: 101, courseName: "Javascript" };
      res(course);
    }, 1000);
  });
}

function getCourseFeeStatus(courseId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Status fetched.");
      res("NOT PAID!");
    }, 1000);
  });
}

async function main() {
  try {
    let user = await getUser(1);
    let course = await getEnrolledCourse(user.userId);
    let feeStatus = await getCourseFeeStatus(course.courseId);
    console.log(feeStatus);
  } catch (err) {
    console.log(err);
  }
}

main();

// The main function itself is not special, but an async function is required to use await in JavaScript.
