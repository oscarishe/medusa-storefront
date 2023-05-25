import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const slider = document.getElementById('price-range');
const priceRangeFrom = document.getElementById('price-range-from');
const priceRangeTo = document.getElementById('price-range-to');
noUiSlider.create(slider, {
    start: [0, 1500],
    connect: true,
    range: {
        'min': 0,
        'max': 1500,
    }
});
slider.noUiSlider.on('slide', () => {
    priceRangeFrom.value = Number(slider.noUiSlider.get()[0]).toFixed(0);
    priceRangeTo.value = Number(slider.noUiSlider.get()[1]).toFixed(0);
})

const handleRange = () => {
    slider.noUiSlider.set([priceRangeFrom.value, priceRangeTo.value])
}

priceRangeFrom.addEventListener('change', handleRange);
priceRangeTo.addEventListener('change', handleRange);