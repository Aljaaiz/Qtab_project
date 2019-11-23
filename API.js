class Quran {
  constructor() {}

  async getQuran() {
    const response = await fetch(
      "http://staging.quran.com:3000/api/v3/chapters"
    );
    // const verse = await
    const chapters = await response.json();
    return chapters.chapters;
  }
}
