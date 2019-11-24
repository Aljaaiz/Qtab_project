//Instantiate UI class
const ui = new UI();
//Instantiate API class
const quran = new Quran();

ui.displayExtraLisContent();
//function to close Element
ui.closeElement();
//function to clse minimise
ui.miniseElement();

quran.getQuran().then(data => {
  ui.paint(data);
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

  hrNow < 10 ? "0" + hrNow : "";
  mNow < 10 ? "0" + mNow : "";

  //getting 12hrs time format
  hrNow = hrNow % 12 || 12;
  // console.log(hrNow, mNow, secNow);

  let hour = document.getElementById("hour");
  let minutes = document.getElementById("minute");
  let am = document.getElementById("amPm");

  hour.textContent = hrNow;
  minutes.textContent = mNow;
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
