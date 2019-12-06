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
// ui.expandSearhInput();

api.fetchQuran().then(data => {
  console.log(data)
  ui.paint(data);
});

api.getPrayerTime().then(data => {
  // console.log(data.prayerData);
  // console.log(data.weatherRes);
  ui.paintSolatTime(data.prayerData);
  ui.paintWeather(data.weatherRes);
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
  const weekDays = ["Sun ", "Mon ", "Tue ", "Wed ", "Thur ", "Fri ", "Sat "];

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

const audio = new Audio("Adhan.mp3");

function updateFunc() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  if (hour - 12 == 9 && audio.paused) {
    audio.play();
    console.log(hour);
  }
  console.log(hour);
  // setTimeout(() => {
  //   audio.pause();
  // }, 200000);
}
// setInterval(updateFunc, 1000);
