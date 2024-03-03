let headerElem=document.getElementsByClassName('header');

let imageArray=['bg1.jpg','bg2.jpg','bg3.jpg'];
let currentIndex=0;
const changedImage=()=>{
    if(headerElem.length > 0){
        for (let i = 0; i < headerElem.length; i++) {
            headerElem[i].style.backgroundImage = `url(../Images/bg-image/${imageArray[currentIndex]})`;
          }
          currentIndex++;
    if (currentIndex >= imageArray.length) {
      currentIndex = 0;
    }
    }
    console.log(headerElem[0].style.backgroundImage);

}
setInterval(changedImage, 5000);

console.log(headerElem);
document.write(headerElem);
