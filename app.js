//Instantiate UI class
const ui = new UI();
//Instantiate API class
const api = new API();

ui.displayExtraLisContent();
//function to close Element
ui.closeElement();
//function to clse minimise
ui.miniseElement();
//function to expand search icon
ui.expandSearhInput();

api.getQuran().then(data => {
  ui.paint(data);
});

api.getPrayerTime().then(data => {
  console.log(data);
  ui.paintSolatTime({ data });

  // const {
  //   timings,
  //   date: {
  //     hijri,
  //     hijri: { weekday }
  //   }
  // } = data.data;
  // console.log(data);
  // console.log(weekday);
});

//clock
function getTime() {
  let today = new Date();
  let hrNow = today.getHours();
  let mNow = today.getMinutes();
  let secNow = today.getSeconds();
  let month = today.getMonth();
  let todayDate = today.getDate();
  let yr = today.getFullYear();
  let wkday = document.getElementById("week");

  // console.log(todayDate, month, yr);

  let amPm = hrNow >= 12 ? "pm" : "am";

  //AdZero Function
  function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
  }

  //getting 12hrs time format
  hrNow = hrNow % 12 || 12;
  // console.log(hrNow, mNow, secNow);

  let time = document.getElementById("time");
  let am = document.getElementById("amPm");

  time.innerHTML = `<span>${hrNow}</span> : ${addZero(mNow)}`;
  am.textContent = amPm;

  //SET FULL DATE AND MONTH
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  //SET WEEK
  const weekDays = ["Sun ", "Mon ", "Tue ", "Wed ", "Thur ", "Fri ", "Sa "];

  let day = document.getElementById("day"),
    monthSpan = document.getElementById("monthSpan"),
    year = document.getElementById("year");

  day.textContent = todayDate;
  monthSpan.textContent = monthNames[today.getMonth()];
  year.textContent = today.getFullYear();
  wkday.textContent = weekDays[today.getDay()];

  // let monthName = monthNames[today.getMonth()];
  // console.log(monthName);

  setTimeout(getTime, 1000);
}
getTime();

//Get Weather
const search = document.getElementById("searchWeather");

// search.addEventListener("blur", () => {
const searchText = "dubai";
console.log(searchText);

// if (searchText !== "") {
api.getPrayerTime().then(data => {
  ui.paintWeather(data);
});
// }
// });
