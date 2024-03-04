const $ = document;
const sectionNumberCup = $.querySelector("#section-number__cup");
const sectionNumberWeek = $.querySelector("#section-number__week");
const sectionNumerGuest = $.querySelector("#section-numer__guest");
const sectionNumberView = $.querySelector("#section-number__view");

window.addEventListener("load", () => {
    makeCounter(172, sectionNumberWeek);
    makeCounter(38, sectionNumberCup);
    makeCounter(500, sectionNumerGuest);
    makeCounter(254, sectionNumberView);
});

function makeCounter(max, elem) {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter === max) {
        clearInterval(interval);
      }
  
      elem.innerHTML = counter;
      counter++;
    }, 1);
  }
  