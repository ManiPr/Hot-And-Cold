
const blogPageFilters = document.querySelector('.blog-page__filters');
const blogs= document.querySelectorAll('.blog-page__blog')
const blogPageContentList=document.querySelectorAll('.blog-page__content-list')
const blogPageBlogs=document.querySelector('.blog-page__blogs')
let data;
let category; 
let url;
let currentPage;
let realData;
let blogData = [
  { id: '1', title: 'Macaroni 1', category: 'رستوران' },
  { id: '2', title: 'Macaroni 2', category: 'دسر' },
  { id: '3', title: 'Macaroni 3', category: 'نوشیدنی' },
  { id: '4', title: 'Macaroni 3', category: 'جدید' },
  { id: '5', title: 'Macaroni 3', category: 'غذا ها ' },
  { id: '6', title: 'Macaroni 3', category: 'رویداد ها' },
  { id: '7', title: 'Macaroni 1', category: 'رستوران' },
  { id: '8', title: 'Macaroni 2', category: 'دسر' },
  { id: '9', title: 'Macaroni 3', category: 'نوشیدنی' },
  { id: '10', title: 'Macaroni 3', category: 'جدید' },
  { id: '11', title: 'Macaroni 3', category: 'غذا ها ' },
  { id: '12', title: 'Macaroni 3', category: 'رویداد ها' },
  { id: '13', title: 'Macaroni 1', category: 'رستوران' },
  { id: '14', title: 'Macaroni 2', category: 'دسر' },

];




const removeUrlParam = (param) => {
  let url = new URL(window.location.href);
  url.searchParams.delete(param);
  history.pushState({}, '', url);
}

// Call this function when the window loads to remove the 'cat' parameter
window.onload = () => {
  removeUrlParam('cat');
}


const getUrlParam = (key) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
};

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
blogPageContentList.forEach(blog => {
  blog.addEventListener('click', (event) => {
     category = event.target.getAttribute('data-content-id');
     addParamToUrl('cat', category); 
      url= getUrlParam('cat')
      filterBlogsByCategory(url);
  });
});
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
    parent.innerHTML = "";
    details.forEach((detail) => {
        parent.insertAdjacentHTML(
          "beforeend",
          `
          <div class="blog-page__blog">
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
      <div  class="blog-page__blog">
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
  const addParamToUrl = (param, value) => {
    console.log(param, value);
    let url = new URL(window.location.href);
    url.searchParams.set(param, value);
    history.pushState({}, '', url);
  }
const coursesPaginationWrapper = document.querySelector(
    ".blog-page__paginations"
  );
  const filterBlogsByCategory = (category) => {
    const filteredData = blogData.filter(blog => blog.category === category);
    console.log(filteredData);
     currentPage = getUrlParam("page") || 1;  
   realData=paginateItems([...filteredData], 2, coursesPaginationWrapper, currentPage)
    add(realData, blogPageBlogs);
  };
   currentPage = getUrlParam("page") || 1;  
   realData=paginateItems([...blogData], 2, coursesPaginationWrapper, currentPage)
    add(realData,blogPageBlogs)
  
