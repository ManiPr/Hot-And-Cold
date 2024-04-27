
const blogPageFilters = document.querySelector('.blog-page__filters');
const blogs= document.querySelectorAll('.blog-page__blog')
const blogPageContentList=document.querySelectorAll('.blog-page__content-list')
const blogPageBlogs=document.querySelector('.blog-page__blogs')
let data;
let blogData=['fdsfs0','fsdfsdf','fdsfsdfsd','fdsfsdfsdf','fdsfsdfsdfsfd']


blogPageFilters.addEventListener('click', () => {
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
    blog.addEventListener('click',(event)=>{
        addParamToUrl('cat',event.target.getAttribute('data-content-id'))
        data=blog.getAttribute('data-content-id')
        console.log(data);
        console.log(blogs);
        blogs.forEach(item=>{
          console.log(item);
            item.classList.add('blog-block')
            if(item.id === event.target.getAttribute('data-content-id')){
              console.log('آره همینه');
                item.classList.remove('blog-block')
            }
        })
    })
    
})

const addParamToUrl = (param, value) => {
    console.log(param, value);
    let url = new URL(location.href)
    let searchParams = url.searchParams
  
    searchParams.set(param, value)
    url.search = searchParams.toString()
    location.href = url.toString()
  }

const paginateItems = (array, itemsPerPage, paginateParentElem, currentPage) => {
    paginateParentElem.innerHTML = ''
    let endIndex = itemsPerPage * currentPage
    let startIndex = endIndex - itemsPerPage
    let paginatedItems = array.slice(startIndex, endIndex)
    let paginatedCount = Math.ceil(array.length / itemsPerPage)
  
    for(let i = 1 ; i < paginatedCount + 1 ; i++) {
      paginateParentElem.insertAdjacentHTML('beforeend', `
      <li class="blog-page__pagination">
        ${
          i === Number(currentPage) ? `
            <a  onclick="addParamToUrl('page', ${i})" class="blog-page__pagination__link blog-page__pagination--active">
              ${i}
            </a>
          ` : `
            <a  onclick="addParamToUrl('page', ${i})" class="blog-page__pagination__link">
              ${i}
            </a>
          `
        }`)
    }
    return paginatedItems
  }
  const add=(details,parent)=>{
    let randomContentId = Math.floor(Math.random() * 4) + 1; // Generate a random number between 1 and 4
    parent.innerHTML = "";
    details.forEach((detail) => {
        parent.insertAdjacentHTML(
          "beforeend",
          `
          <div id="${randomContentId}" class="blog-page__blog">
          <div class="blog-page__image-container">
              <img src="./Images/blog.jpg" class="blog-page__image">
          </div>
          <div class="blog-page__content">
              <div class="blog-page__titles">
                  <h3 class="blog-page__title">ماکارونی</h3>
                  <p class="blog-page__caption"><span class="blog-page__date">پنج فروردین هزار چارصد و یک</span>
                  <span class="blog-page___catagory">رویداد</span>
                  <span class="blog-page__tag">رستوران</span>
                  </p>
                  <p class="blog-page__description">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
              </div>
              <div class="blog-page__button"><a href="file:///C:/Users/ManiPr/Desktop/Programming/Hot%20And%20Cold/blog-deatail.html">ادامه سخن</a></div>
          </div>
      </div>
      <div id="${randomContentId}" class="blog-page__blog">
      <div class="blog-page__image-container">
          <img src="./Images/blog.jpg" class="blog-page__image">
      </div>
      <div class="blog-page__content">
          <div class="blog-page__titles">
              <h3 class="blog-page__title">ماکارونی</h3>
              <p class="blog-page__caption"><span class="blog-page__date">پنج فروردین هزار چارصد و یک</span>
              <span class="blog-page___catagory">رویداد</span>
              <span class="blog-page__tag">رستوران</span>
              </p>
              <p class="blog-page__description">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
          </div>
          <div class="blog-page__button"><a href="file:///C:/Users/ManiPr/Desktop/Programming/Hot%20And%20Cold/blog-deatail.html">ادامه سخن</a></div>
      </div>
  </div>
          `
        );
      });
  }
const coursesPaginationWrapper = document.querySelector(
    ".blog-page__paginations"
  );
  const getUrlParam = (key) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
  };
  const currentPage = getUrlParam("page") || 1;  
  const realData=paginateItems([...blogData], 3, coursesPaginationWrapper, currentPage)

  

  add(realData,blogPageBlogs)
