import Carousel from 'bootstrap/js/src/carousel';

const getCarousel = (control) => {
    const carousel = control.closest('.carousel');
    return carousel ? Carousel.getOrCreateInstance(carousel) : null;
};

const bootstrapCarouselControl = () => {
    const controlPrevNodes = document.querySelectorAll(
        '.carousel-control-prev'
    );
    const controlNextNodes = document.querySelectorAll(
        '.carousel-control-next'
    );
    const indicators = document.querySelectorAll('.carousel-indicators');
    Array.prototype.forEach.call(indicators, (button) => {
        button.addEventListener('click', (e) => {
            const slideNumber = e.target.tagName == 'IMG' ? e.target.parentElement.dataset.bsSlideTo : e.target.dataset.bsSlideTo;

            const carousel = getCarousel(button);
            if (!isNaN(slideNumber)) carousel.to(slideNumber);
        });
    });
    Array.prototype.forEach.call(controlPrevNodes, (control) => {
        control.addEventListener('click', () => {
            const carousel = getCarousel(control);
            if (carousel) carousel.prev();
        });
    });
    Array.prototype.forEach.call(controlNextNodes, (control) => {
        control.addEventListener('click', () => {
            const carousel = getCarousel(control);
            if (carousel) carousel.next();
        });
    });
};
bootstrapCarouselControl();

