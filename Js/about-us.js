const $ = document;
const sectionNumberCup = $.querySelector("#section-number__cup");
const sectionNumberWeek = $.querySelector("#section-number__week");
const sectionNumerGuest = $.querySelector("#section-numer__guest");
const sectionNumberView = $.querySelector("#section-number__view");
const sectionGalleryGalleryName=$.querySelectorAll('.section-gallery__gallery-name');
const sectionGalleryImages=$.querySelectorAll('.section-gallery__images');
const sectionGalleryImage=$.querySelectorAll('.section-gallery__image');
const sectionGalleryIcon=$.querySelectorAll('.section-gallery__icon');
const sectoinGalleryBigImage=$.querySelector('.sectoin-gallery__big-image');
const aboutUsPageShadow=$.querySelector('.about-us-page__shadow');
const sectionGalleryIconF=$.querySelector('.section-gallery__icon-f')
const sectionGalleryBigContainerImage=$.querySelector('.section-gallery__big-container-image')
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
sectionGalleryIcon.forEach((gallery)=>{
  gallery.addEventListener('click',()=>{
    sectionGalleryImage.forEach((image)=>{
      if(gallery.parentElement.childNodes[1].getAttribute('src') === image.getAttribute('src')){
        aboutUsPageShadow.classList.add('about-us-page__shadow-on')
        sectionGalleryBigContainerImage.classList.add('section-gallery__big-container-image-on')
        sectoinGalleryBigImage.setAttribute('src',image.getAttribute('src'))
        document.addEventListener('click', handleClickOutside);

      }
    })
  })
})
sectionGalleryIconF.addEventListener('click',()=>{
  aboutUsPageShadow.classList.remove('about-us-page__shadow-on')
  sectionGalleryBigContainerImage.classList.remove('section-gallery__big-container-image-on')
})
