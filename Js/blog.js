const blogPageFilters = document.querySelector('.blog-page__filters');
const blogs= document.querySelectorAll('.blog-page__blog')
const blogPageContentList=document.querySelectorAll('.blog-page__content-list')
let data;
blogPageFilters.addEventListener('click', () => {

    console.log('خانه');
    if (flag2) {
        blogPageTopBar.classList.add('cart-now');
        blogPageTopBar.classList.add('cart-index');
        flag2 = false;
    } else {
        blogPageTopBar.classList.remove('cart-now');
        blogPageTopBar.classList.remove('cart-index');
        flag2 = true;
    }
});
blogPageContentList.forEach(blog=>{
    blog.addEventListener('click',()=>{
        data=blog.getAttribute('data-content-id')
        blogs.forEach(item=>{
            item.classList.add('blog-block')
            if(item.id === data){
                console.log(item);
                item.classList.remove('blog-block')
            }
        })
        console.log('fsdfsd');
    })
})
