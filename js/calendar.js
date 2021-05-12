//in progress...
const monthNamesRy = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daysOfTheWeekRy = ["S", "M", "T", "W", "T", "F", "S"];

const d = new Date();
const year = d.getFullYear();
document.querySelector("#year").innerHTML = year;
const thisMonth = d.getMonth();
const today = d.getDate();

const daysOfTheMonthDiv = document.querySelectorAll(".daysOfTheMonth");

for (let month = 0; month < 12; month++) {
  createCalendar(month);
}

function createCalendar(month) {
  const monthDiv = createMonthHeader(month);

  let firstDayOfTheMonth = getFirstDayOfTheMonth(year, month);
  let daysinmonth = daysInMonth(year, month);
  let counter = 0,
    order = 6;

  for (let i = 0; i < firstDayOfTheMonth + 7; i++) {
    order++;
    createDay(month, "&nbsp;", order, monthDiv);
  }
  for (
    let i = firstDayOfTheMonth;
    i < daysInMonth(year, month) + firstDayOfTheMonth;
    i++
  ) {
    counter++;
    order++;
    createDay(month, counter, order, monthDiv);
  }

  for (let i = firstDayOfTheMonth + daysinmonth; i < 6 * 7; i++) {
    order++;
    createDay(month, "&nbsp;", order, monthDiv);
  }
}

function createDay(month, counter, order, monthDiv) {
  let day = document.createElement("div");
  if (month == thisMonth && counter == today) {
    day.setAttribute("class", "to day");
  } else {
    day.setAttribute("class", "day");
  }
  day.setAttribute("style", "order:" + order);
  day.innerHTML = counter;
  monthDiv.appendChild(day);
}

function createMonthHeader(month) {
  const calendar = document.querySelector(".calendar");

  const monthDiv = document.createElement("div");
  monthDiv.setAttribute("class", "month");
  calendar.appendChild(monthDiv);

  const h4 = document.createElement("h4");
  h4.innerHTML = monthNamesRy[month];
  monthDiv.appendChild(h4);

  for (let i = 0; i < 7; i++) {
    let hday = document.createElement("div");
    hday.setAttribute("class", "day OfWeek");
    hday.setAttribute("style", "order:" + i);
    hday.innerHTML = daysOfTheWeekRy[i].toUpperCase();
    monthDiv.appendChild(hday);
  }

  return monthDiv;
}

function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getMonthName(month) {
  return monthNamesRy[month];
}
function getDayName(day) {
  return daysOfTheWeekRy[day];
}

function getFirstDayOfTheMonth(y, m) {
  let firstDay = new Date(y, m, 1);
  return firstDay.getDay();
}
function getLastDayOfTheMonth(y, m) {
  let lastDay = new Date(y, m + 1, 0);
  return lastDay.getDay();
}

const calendar = document.querySelector(".calendar");
const cloneCont = document.querySelector(".cloneCont");
const requestId = false;
calendar.addEventListener(
  "click",
  function (e) {
    if (this.querySelector(".cloneCont")) {
      this.removeChild(this.querySelector(".cloneCont"));
    } else if (e.target.parentNode.className == "month") {
      let monthClone = e.target.parentNode.cloneNode(true);
      monthClone.className += " cloneMonth";
      let cloneCont = document.createElement("div");
      cloneCont.className += " cloneCont";
      cloneCont.appendChild(monthClone);
      this.appendChild(cloneCont);
    }
  },
  false
);
