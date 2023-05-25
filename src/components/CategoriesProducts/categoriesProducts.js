const switcherButtons = document.querySelectorAll('.categories__button[data-type]');
const container = document.querySelector('.categories__container');

switcherButtons.forEach(button => {
    button.addEventListener('click', () => {
        const type = button.dataset.type;
        switcherButtons.forEach(button => button.classList.toggle('active'));
        container.className = `categories__container categories__container_${type}`;
    })
})