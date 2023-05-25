import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);
const initSwiper = (tag, config) => {
    new Swiper(tag, {
        speed: 400,
        spaceBetween: 40,
        ...config
    });
}

export default initSwiper;