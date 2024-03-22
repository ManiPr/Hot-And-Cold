const bookTable__main=document.querySelector('.book-table__main'); 
const firstbBookTable__content=document.querySelector('.book-table__content').offsetWidth;
const arrowBtns = document.querySelectorAll(".book-table__bottom  i");
const bookTable__mainChilds = [...bookTable__main.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(bookTable__main.offsetWidth / firstbBookTable__content);

bookTable__mainChilds.slice(-cardPerView).reverse().forEach(book => {
    bookTable__main.insertAdjacentHTML("afterbegin", book.outerHTML);
});
bookTable__mainChilds.slice(0, cardPerView).forEach(book => {
    bookTable__main.insertAdjacentHTML("beforeend", book.outerHTML);
});

bookTable__main.classList.add("no-transition");
bookTable__main.scrollLeft = bookTable__main.offsetWidth;
bookTable__main.classList.remove("no-transition");

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log('مانی');
        bookTable__main.scrollLeft += btn.id == "left" ? -firstbBookTable__content : firstbBookTable__content;
    });
});

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(bookTable__main.scrollLeft === 0) {
        bookTable__main.classList.add("no-transition");
        bookTable__main.scrollLeft = bookTable__main.scrollWidth - (2 * bookTable__main.offsetWidth);
        bookTable__main.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(bookTable__main.scrollLeft) === bookTable__main.scrollWidth - bookTable__main.offsetWidth) {
        bookTable__main.classList.add("no-transition");
        bookTable__main.scrollLeft = bookTable__main.offsetWidth;
        bookTable__main.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}