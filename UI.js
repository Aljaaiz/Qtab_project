class UI {
  constructor() {
    this.extra_lis = document.querySelectorAll(".extra-content");
    this.close = document.querySelectorAll(".close");
    this.minimise = document.querySelectorAll(".minimise");
    this.chapter_id = document.getElementById("chapter");
    this.verse_id = document.getElementById("verse");
    this.loc_icon = document.getElementById("loc_icon");
    this.fajr = document.getElementById("fajr");
    this.sunrise = document.getElementById("sunrise");
    this.zuhr = document.getElementById("zuhr");
    this.asr = document.getElementById("asr");
    this.magrib = document.getElementById("magrib");
    this.ishai = document.getElementById("ishai");
    this.location = document.getElementById("w-loc");
    this.temperature = document.getElementById("w-temp");
    this.w_icon = document.getElementById("w-image");
  }

  displayExtraLisContent() {
    this.extra_lis.forEach(item => {
      item.addEventListener("click", function (e) {
        if (e.target.classList.contains("extra-content")) {
          console.log("yes");
          e.target.children[1].classList.toggle("active");
        }
      });
    });
  }

  closeElement() {
    this.close.forEach(close => {
      close.addEventListener("click", e => {
        console.log(
          (e.target.parentElement.parentElement.parentElement.style.display =
            "none")
        );
      });
    });
  }
  //MINIMISE ELEEMENT FUNCTION
  miniseElement() {
    this.minimise.forEach(minimise => {
      minimise.addEventListener("click", e => {
        if (
          e.target.parentElement.parentElement.parentElement.classList.toggle(
            "active"
          )
        ) {
        }
      });
    });
  }

  // expandSearhInput() {
  //   this.loc_icon.addEventListener("click", function() {
  //     document.getElementById("searchWeather").classList.toggle("active");
  //   });
  // }

  paint(data) {
    document.querySelector("#qtext").innerHTML = data.Text;
    document.querySelector("#chapter").innerHTML = data.Chapter;
    document.querySelector("#c_name").innerHTML = data.Id;
  }

  //Solat into the UI
  paintSolatTime(data) {
    console.log(data);

    const {
      timings
      // date: { hijri }
    } = data.data;

    console.log(timings);
    this.fajr.innerHTML = timings.Fajr + " am";
    this.sunrise.innerHTML = timings.Sunrise + " am";
    this.zuhr.innerHTML = timings.Dhuhr + " pm";
    this.asr.innerHTML = timings.Asr + " pm";
    this.magrib.innerHTML = timings.Maghrib + " am";
    this.ishai.innerHTML = timings.Isha + " am";
  }

  paintWeather(data) {
    console.log(data);
    const {
      main: { temp },
      name,
      sys: { country }
    } = data;
    const icon = data.weather[0].icon;
    let roundTemp = temp.toFixed();
    this.temperature.innerHTML = `${roundTemp} &#176;C`;
    this.location.innerHTML = name;
    this.w_icon.innerHTML = `<img src="http://openweathermap.org/img/w/${icon}.png" >`;

    console.log(temp.toFixed(), name, icon);
  }
}
