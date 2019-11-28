class API {
  constructor(city) {
    this.iplookUp_key = "dafdf45f6daeec40a9c75f3cf3ef00bf";
    this.weather_key = "010de9aad2daf9275f7f13d7d358cdc4";
  }
  async getQuran() {
    const response = await fetch(
      "http://staging.quran.com:3000/api/v3/chapters"
    );
    // const verse = await
    const chapters = await response.json();
    return chapters.chapters;
  }

  async getPrayerTime() {
    //get User IP Address to detect user's Location
    const getIp = await fetch(
      `http://api.ipstack.com/check?access_key=${this.iplookUp_key}`
    );

    const ipResponse = await getIp.json();

    //Fecth Prayer time base on IpResponse
    const response = await fetch(
      `http://api.aladhan.com/v1/timingsByCity?city=${ipResponse.city}&country=${ipResponse.country_name}&method=3`
    );
    const prayerData = await response.json();

    //Get Weather
    const responseWeather = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ipResponse.city}&appid=${this.weather_key}&units=metric`
    );
    const weatherRes = await responseWeather.json();
    console.log(weatherRes);

    return prayerData.data, weatherRes;
  }

  //Function to fecth Weather
  async searchWeather(city) {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.weather_key}&units=metric`
    );
    const weatherRes = await response.json();
    console.log(weatherRes);

    return weatherRes.data, resData;
  }
}
