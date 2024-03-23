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



const dragStart = (e) => {
    isDragging = true;
    bookTable__main.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = bookTable__main.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    bookTable__main.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    bookTable__main.classList.remove("dragging");
}


bookTable__main.addEventListener("mousedown", dragStart);
bookTable__main.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
bookTable__main.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
