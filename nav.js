const listItem = document.querySelector('.container-list');
const hamMenu = document.querySelector('.hamburger');

hamMenu.addEventListener('click', () =>{
    listItem.classList.toggle("change");
    hamMenu.classList.toggle("change");
})