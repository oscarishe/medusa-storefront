const navLinks = [...document.querySelectorAll('.product-details__link'), ...document.querySelectorAll('.product-info__link')];

const sections = document.querySelectorAll('.product-details__item');

navLinks.forEach(item => {
    item.addEventListener('click', () => {
        const activeSection = item.dataset.target;
        navLinks.forEach(link => link.classList.remove('active'));
        item.classList.add('active');
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === activeSection) section.classList.add('active');
        })
    })
})