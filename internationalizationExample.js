let userName = document.getElementById("name");
let joiningDate = document.getElementById("joining-date");
let salary = document.getElementById("salary");
let views = document.getElementById("views");

const localeDetails = { "en-US": "USD", "en-IN": "INR", "fr-FR": "EUR" };

const user = {
  name: "John Doe",
  joiningDate: "2023-09-15",
  salary: 85000.75,
  views: 1234567,
};

let localeTypeDropdown = document.getElementById("localeTypeDropdown");
let localeType = localeTypeDropdown.value;

function formatDate(date) {
  date = new Date(date);
  let formattedDate = new Intl.DateTimeFormat(localeType, {
    dateStyle: "long",
  }).format(date);
  return formattedDate;
}

function formatSalary(salary) {
  let formattedSalary = new Intl.NumberFormat(localeType, {
    style: "currency",
    currency: localeDetails[localeType],
  }).format(salary);
  return formattedSalary;
}

function formatViews(views) {
  let formattedViews = new Intl.NumberFormat(localeType).format(views);
  return formattedViews;
}

localeTypeDropdown.addEventListener("change", () => {
  localeType = localeTypeDropdown.value;
  renderUser();
});

function renderUser() {
  userName.innerText = user.name;
  joiningDate.innerText = formatDate(user.joiningDate);
  salary.innerText = formatSalary(user.salary);
  views.innerText = formatViews(user.views);
}

renderUser();
