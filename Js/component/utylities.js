const saveIntoLocalStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
  };
  
  const getFromLocalStorage = (key) => {
    return JSON.stringify(localStorage.getItem(key));
  };
  

  
  export { saveIntoLocalStorage, getFromLocalStorage };