class UI {
  constructor() {
    this.extra_lis = document.querySelectorAll(".extra-content");
    this.close = document.querySelectorAll(".close");
    this.minimise = document.querySelectorAll(".minimise");
    this.chapter_id = document.getElementById("chapter");
    this.verse_id = document.getElementById("verse");
  }

  displayExtraLisContent() {
    this.extra_lis.forEach(item => {
      item.addEventListener("click", function(e) {
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
          (e.target.parentElement.parentElement.style.display = "none")
        );
      });
    });
  }
  //MINIMISE ELEEMENT FUNCTION
  miniseElement() {
    this.minimise.forEach(minimise => {
      minimise.addEventListener("click", e => {
        if (e.target.parentElement.parentElement.classList.toggle("active")) {
        }
      });
    });
  }

  paint(data) {
    let output = "";
    data.forEach(data => {
      output += data.name_simple;
    });
    // this.chapter_id.textContent = `<option> ${output}</option>`;
    console.log(output);
  }
}