const openButton = document.querySelector('.vertical-menu__open-button');
const verticalMenuContainer = document.querySelector('.vertical-menu__container');
const verticalMenu = document.querySelector('.vertical-menu');
const moreLinksButton = document.querySelector('.vertical-menu__item_more-button');
const hiddenCategories = document.querySelectorAll('.vertical-menu__item.hidden');

openButton.addEventListener('click', () => {
    verticalMenuContainer.classList.toggle('active');
    openButton.classList.toggle('active');
});

moreLinksButton.addEventListener('click', () => {
    hiddenCategories.forEach(item => item.classList.toggle('hidden'));
})
