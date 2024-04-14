const $ = document;
const sectionNumberCup = $.querySelector("#section-number__cup");
const sectionNumberWeek = $.querySelector("#section-number__week");
const sectionNumerGuest = $.querySelector("#section-numer__guest");
const sectionNumberView = $.querySelector("#section-number__view");
const sectionGalleryGalleryName=$.querySelectorAll('.section-gallery__gallery-name');
const sectionGalleryImages=$.querySelectorAll('.section-gallery__images')
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

  sectionGalleryGalleryName.forEach((section)=>{
    section.addEventListener('click',function(){
      sectionGalleryGalleryName.forEach((cat)=>{
            cat.classList.remove('section-gallery__gallery-name--active');
        });
        sectionGalleryImages.forEach((sec)=>{
          sec.classList.remove('section-gallery__images--show')
        })
         this.classList.add('section-gallery__gallery-name--active');
         let contentId = this.getAttribute('data-content-id')
    })
})