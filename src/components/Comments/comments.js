const textarea = document.querySelector('.comments-form__textarea');
const hiddenSection = document.querySelector('.comments-form__section');
textarea.addEventListener('focus', () => {
    hiddenSection.classList.remove('d-none');
    textarea.classList.add('active');
})