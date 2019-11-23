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
