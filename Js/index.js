document.addEventListener('DOMContentLoaded', function () {
  const imageElem = document.querySelector('.header-background-image'); 
  let imageArray = ['./Images/bg-image/bg1.jpg', './Images/bg-image/bg2.jpg', './Images/bg-image/bg3.jpg'];
  let currentIndex = 0;

  const changeImage = () => {
      currentIndex++;
      if (currentIndex >= imageArray.length) {
          currentIndex = 0;
      }
      
      imageElem.style.opacity = 0;

      setTimeout(() => {
          imageElem.src = imageArray[currentIndex];
          imageElem.onload = () => {
              imageElem.style.opacity = 1;
          };
      }, 2000);
  };

  window.onload = () => {
      imageElem.style.opacity = 1;
  };

  setInterval(changeImage, 6000);
});