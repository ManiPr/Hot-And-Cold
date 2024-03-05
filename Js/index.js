document.addEventListener('DOMContentLoaded', function () {
  const imageElem = document.querySelector('.header-background-image'); 
  let imageArray = [ './Images/bg-image/bg2.jpg', './Images/bg-image/bg3.jpg'];
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

  setInterval(changeImage, 4000);
});






document.addEventListener("DOMContentLoaded", function() {
  let index = 0; // شاخص فعلی اسلایدر
  const itemsToShow = 3; // تعداد آیتم‌هایی که باید نشان داده شود
  const slider = document.getElementById('slider');
  const totalItems = slider.children.length; // تعداد کل آیتم‌ها

  // نمایش آیتم‌های اولیه
  updateDisplay();

  // تابع برای حرکت دادن اسلایدر
  window.moveSlide = function(step) {
      index += step;

      // اطمینان از اینکه اسلایدر در محدوده مجاز حرکت می‌کند
      if (index < 0) {
          index = 0;
      } else if (index + itemsToShow > totalItems) {
          index = totalItems - itemsToShow;
      }

      updateDisplay();
  };

  // تابع برای بروزرسانی نمایش اسلایدر
  function updateDisplay() {
      for (let i = 0; i < totalItems; i++) {
          slider.children[i].style.display = (i >= index && i < index + itemsToShow) ? 'block' : 'none';
      }
  }
});