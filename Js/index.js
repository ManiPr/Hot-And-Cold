const menus=document.querySelectorAll('.special-select__menus')
const categories=document.querySelectorAll('.special-select__category')
const icons=document.querySelectorAll('.special-select__icon')
const menuIcon=document.querySelector('.nav__icon-f')
const menuStatic=document.querySelector('.menu-static')
const headerCart=document.querySelector('.header__cart')
const navShoppingCart=document.querySelector('.nav__shopping-cart')
const navBook=document.querySelector('.nav__book')
const table=document.querySelector('.table')
const body=document.querySelector('body')
const tableIcon=document.querySelector('.table__icon')
document.addEventListener('DOMContentLoaded', function () {
  const imageElem = document.querySelector('.header-background-image'); 
  let imageArray = [ './Images/bg-image/bg2.jpg', './Images/bg-image/bg3.jpg'];
  let currentIndex = 0;
  let flag=false;
  let flag2=true;
  let flag3=true;
  navShoppingCart.addEventListener('click',()=>{
    if(flag2){
        headerCart.classList.add('cart-now')
        headerCart.classList.add('cart-index')       
        flag2=false;
    }
    else{
        headerCart.classList.remove('cart-now')
        headerCart.classList.remove('cart-index')
        flag2=true;
    }
})
navBook.addEventListener('click',()=>{
    console.log('دورود');
    if(flag2){
        table.classList.add('cart-now')
        table.classList.add('cart-index')
        body.style.pointerEvents='none';   
        table.style.pointerEvents='all'    
        flag2=false;
    }
  })
  tableIcon.addEventListener('click',()=>{
    console.log('click');
    table.classList.remove('cart-now')
    table.classList.remove('cart-index')
    body.style.pointerEvents='all';   
    flag2=true;
  })
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




