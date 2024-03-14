const menus=document.querySelectorAll('.special-select__menus')
const categories=document.querySelectorAll('.special-select__category')
const icons=document.querySelectorAll('.special-select__icon')
const menuIcon=document.querySelector('.nav__icon-f')
const menuStatic=document.querySelector('.menu-static')
document.addEventListener('DOMContentLoaded', function () {
  const imageElem = document.querySelector('.header-background-image'); 
  let imageArray = [ './Images/bg-image/bg2.jpg', './Images/bg-image/bg3.jpg'];
  let currentIndex = 0;
  let flag=false;
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
  

categories.forEach((category)=>{
    category.addEventListener('click',function(){
        categories.forEach((cat)=>{
            cat.classList.remove('special-select__category--active');
        });
        menus.forEach((menu)=>{
            menu.classList.remove('special-select__menus--show')
        })
         this.classList.add('special-select__category--active');
         let contentId = this.getAttribute('data-content-id')
         console.log(contentId);
         console.log(document.getElementById(contentId).classList.add('special-select__menus--show'));
    })
})

menuIcon.addEventListener('click',()=>{
            console.log('مانی');
            if (!flag) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark'); 
                menuStatic.classList.add('menu-static--show')
                flag = true;
            } else {
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
                menuStatic.classList.remove('menu-static--show')
                flag = false;
            }
       

    })


});






// document.addEventListener("DOMContentLoaded", function() {
//   let index = 0; // شاخص فعلی اسلایدر
//   const itemsToShow = 3; // تعداد آیتم‌هایی که باید نشان داده شود
//   const slider = document.getElementById('slider');
//   const totalItems = slider.children.length; // تعداد کل آیتم‌ها

//   // نمایش آیتم‌های اولیه
//   updateDisplay();

//   // تابع برای حرکت دادن اسلایدر
//   window.moveSlide = function(step) {
//       index += step;

//       // اطمینان از اینکه اسلایدر در محدوده مجاز حرکت می‌کند
//       if (index < 0) {
//           index = 0;
//       } else if (index + itemsToShow > totalItems) {
//           index = totalItems - itemsToShow;
//       }

//       updateDisplay();
//   };

//   // تابع برای بروزرسانی نمایش اسلایدر
//   function updateDisplay() {
//       for (let i = 0; i < totalItems; i++) {
//           slider.children[i].style.display = (i >= index && i < index + itemsToShow) ? 'block' : 'none';
//       }
//   }
// });








