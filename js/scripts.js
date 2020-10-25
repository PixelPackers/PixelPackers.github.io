let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.querySelector('.panel');;
    if (panel.style.height == 'auto') {
      panel.style.height = '0px';
    } else {
      panel.style.height = 'auto';
    }
  });
}