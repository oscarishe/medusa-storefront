import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot } from '../astro.948111e9.mjs';
import 'html-escaper';
/* empty css                          *//* empty css                           *//* empty css                          */import Medusa from '@medusajs/medusa-js';
/* empty css                          *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                          *//* empty css                          *//* empty css                          */
const $$Astro$t = createAstro();
const $$SwiperNavigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$SwiperNavigation;
  const { element } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="swiper-navigation">
    <button${addAttribute(`${element} swiper-nav swiper-prev`, "class")}><i class="fa-solid fa-chevron-left"></i></button>
    <button${addAttribute(`${element} swiper-nav swiper-next`, "class")}><i class="fa-solid fa-chevron-right"></i></button>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Swiper/Navigation/SwiperNavigation.astro");

const getMinPrice = (variants) => {
    const priceArray = variants.map(variant => {
        return variant.prices.map(price => {
            return parseFloat(price.amount/100);
        })
    }).flat();
    return Math.min(...priceArray);
};

const getOptions = (product) => {
    const options = product.options.reduce((acum, next) =>  ({...acum, [next.id]: next.title}), {});
    const totalOptions = [];
    product.variants.forEach(variant => {
        const variantOptions = variant.options.reduce((acum, next) => ([...acum, {name: options[next.option_id], value:next.value}]), []);
        totalOptions.push([...variantOptions]);
    });
    return totalOptions.flat();
};

const $$Astro$s = createAstro();
const $$Grade = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Grade;
  const { grade, isEmptyStars } = Astro2.props;
  const maxGrade = isEmptyStars ? new Array(grade).fill(1) : new Array(5).fill(1);
  return renderTemplate`${maybeRenderHead($$result)}<div class="grade">
    ${maxGrade.map((item, index) => index < grade ? renderTemplate`<i class="fa-solid fa-star marked"></i>` : renderTemplate`<i class="fa-solid fa-star"></i>`)}
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Grade/Grade.astro");

const $$Astro$r = createAstro();
const $$ProductItemCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$ProductItemCard;
  const { handle, images, title, isOnSale } = Astro2.props.product;
  const variantId = Astro2.props.product.variants[0].id;
  const price = getMinPrice(Astro2.props.product.variants);
  return renderTemplate`${maybeRenderHead($$result)}<div class="product-item-card">
    <div class="product-item-card__img-section">
        <a class="product-item-card__img-link"${addAttribute(`/products/${handle}`, "href")}>
            <img${addAttribute(images[0]?.url || "/assets/images/products/product1.jpg", "src")} alt="" class="product-item-card__image">
        </a>
        <a class="product-item-card__hidden-link"${addAttribute(`/products/${handle}`, "href")}>
            <i class="fa-regular fa-eye"></i>
        </a>
        ${isOnSale && renderTemplate`<div class="product-item-card__sticker">Акция!</div>`}
    </div>
    <div class="product-item-card__title">${title}</div>
    <div class="product-item-card__grade">
        ${renderComponent($$result, "Grade", $$Grade, { "grade": 5 })}
    </div>
    <div class="product-item-card__price">
        <span class="product-item-card__actual-price">от ${price} р.</span>
    </div>
    <div class="product-item-card__hidden-section">
        ${renderComponent($$result, "CartButton", null, { "variantId": variantId, "className": "", "client:only": true, "client:component-hydration": "only", "client:component-path": "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Buttons/CartButton", "client:component-export": "CartButton" })}
    </div>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/ProductItem/ProductItemCard/ProductItemCard.astro");

// export const doubleProducts = [...products, ...products];

const bannersDouble = [
    {
        imgSrc: '/assets/images/banners/banner1.png',
        link: '#',
    },
    {
        imgSrc: '/assets/images/banners/banner1.png',
        link: '#',
    }
];

const bannersTriple = [
    {
        imgSrc: '/assets/images/banners/banner3.jpg',
        link: '#',
    },
    {
        imgSrc: '/assets/images/banners/banner3.jpg',
        link: '#',
    },
    {
        imgSrc: '/assets/images/banners/banner3.jpg',
        link: '#',
    },
];

const categories = [
    {   
        id: '1',
        link: 'teplicy',
        name: 'Теплицы',
        img: '/assets/images/products/product1.jpg',
    },
    {
        id: '2',
        link: 'besedki',
        name: 'Беседки',
        img: '/assets/images/products/product1.jpg',
    },
    {
        id: '3',
        link: 'category1',
        name: 'Категория 1',
        img: '/assets/images/products/product1.jpg',
    }
];

const blogs = [
    {
        id: 1,
        imgSrc: '/assets/images/blog/blog1.png',
        imgAlt: 'Блог',
        title: 'Как выбрать теплицу',
        date: '1 апреля 2023',
        author: 'admin',
        description: 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. ',
        categories: categories,
        text: 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. '.repeat(5),
    },
    {
        id: 2,
        imgSrc: '/assets/images/blog/blog1.png',
        imgAlt: 'Блог',
        title: 'Как выбрать теплицу',
        date: '1 апреля 2023',
        author: 'admin',
        description: 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. ',
        categories: categories,
        text: 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. '.repeat(5),
    },
    {
        id: 3,
        imgSrc: '/assets/images/blog/blog1.png',
        imgAlt: 'Блог',
        title: 'Как выбрать теплицу',
        date: '1 апреля 2023',
        author: 'admin',
        description: 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. ',
        categories: categories,
        text: 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. '.repeat(5),
    },
    {
        id: 4,
        imgSrc: '/assets/images/blog/blog1.png',
        imgAlt: 'Блог',
        title: 'Как выбрать теплицу',
        date: '1 апреля 2023',
        author: 'admin',
        description: 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. ',
        categories: categories,
        text: 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. '.repeat(5),
    },
    {
        id: 5,
        imgSrc: '/assets/images/blog/blog1.png',
        imgAlt: 'Блог',
        title: 'Как выбрать теплицу',
        date: '1 апреля 2023',
        author: 'admin',
        description: 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. ',
        categories: categories,
        text: 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. '.repeat(5),
    },
];

const dropdownProducts = [
    {
        category: 'Теплицы',
        link: 'teplicy',
        items: [
            {
                name: 'Сибирская 2м',
                link: 'sibirskaya'
            },
            {
                name: 'Сибирская 4м',
                link: 'sibirskaya'
            },
            {
                name: 'Сибирская 6м',
                link: 'sibirskaya'
            },
            {
                name: 'Сибирская 8м',
                link: 'sibirskaya'
            },
        ]
    },
    {
        category: 'Теплицы',
        link: 'teplicy',
        items: [
            {
                name: 'Сибирская 2м',
                link: 'sibirskaya'
            },
            {
                name: 'Сибирская 4м',
                link: 'sibirskaya'
            },
            {
                name: 'Сибирская 6м',
                link: 'sibirskaya'
            },
            {
                name: 'Сибирская 8м',
                link: 'sibirskaya'
            },
        ]
    },
    {
        category: 'Теплицы',
        link: 'teplicy',
        items: [
            {
                name: 'Сибирская 2м',
                link: 'sibirskaya'
            },
            {
                name: 'Сибирская 4м',
                link: 'sibirskaya'
            },
            {
                name: 'Сибирская 6м',
                link: 'sibirskaya'
            },
            {
                name: 'Сибирская 8м',
                link: 'sibirskaya'
            },
        ]
    },
    {
        category: 'Теплицы',
        link: 'teplicy',
        items: [
            {
                name: 'Сибирская 2м',
                link: 'sibirskaya'
            },
            {
                name: 'Сибирская 4м',
                link: 'sibirskaya'
            },
            {
                name: 'Сибирская 6м',
                link: 'sibirskaya'
            },
            {
                name: 'Сибирская 8м',
                link: 'sibirskaya'
            },
        ]
    }
];

const reviews = [
    {
        author: 'Иван Сидоров',
        date: '12/04/2023',
        title: 'Отличная теплица!',
        text: 'Очень хорошая теплица, доставили быстро в тот же день. Цена очень доступная. 10 из 10!',
        qualityGrade: 5,
        deliveryGrade: 5,
        priceGrade: 5,
    }, {
        author: 'Иван Сидоров',
        date: '12/04/2023',
        title: 'Отличная теплица!',
        text: 'Очень хорошая теплица, доставили быстро в тот же день. Цена очень доступная. 10 из 10!',
        qualityGrade: 1,
        deliveryGrade: 2,
        priceGrade: 3,
    }
];

const blogSidebarLinks = [
    {
        text: 'Категория 1',
        link: 'cat-1',
    },
    {
        text: 'Категория 2',
        link: 'cat-2',
    },
    {
        text: 'Категория 3',
        link: 'cat-3',
    },
];

const socialIcons = {
    facebook: 'fa-brands fa-facebook-f',
    twitter: 'fa-brands fa-twitter',
    instagram: 'fa-brands fa-instagram',
    youtube: 'fa-brands fa-youtube',
    viber: 'fa-brands fa-viber',
    telegram: 'fa-solid fa-paper-plane',
};

const $$Astro$q = createAstro();
const $$SocialLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$SocialLink;
  const { link, social, modifier } = Astro2.props;
  const iconClass = socialIcons[social];
  const linkClass = `social-link social-link_${social}` + (modifier ? ` social-link_${modifier}` : "");
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(link, "href")}${addAttribute(linkClass, "class")}>
    <i${addAttribute(iconClass, "class")}></i>
</a>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/SocialLink/SocialLink.astro");

const $$Astro$p = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="footer">
    <div class="footer-top">
        <div class="container">
            <div class="row footer-top__container">
                <div class="col-lg-3 col-md-6 col-12 mb-4">
                    <div class="footer__title">Контакты</div>
                    <p class="footer__description">
                        Lorem ipsum dolor sit amet, consectetu adipiscing elite
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua quis ipsum suspendisse.
                    </p>
                    <ul class="contacts-list">
                        <li class="contacts-list__item">
                            <i class="contacts-list__icon fa-solid fa-map"></i>
                            <span class="contacts-list__text">4331 Dominion St, Burnaby, BC V5G 1C7, Canada
                                7X4V+M2 Burnaby, British Columbia, Canada</span>
                        </li>
                        <li class="contacts-list__item">
                            <i class="contacts-list__icon fa-solid fa-map"></i>
                            <span class="contacts-list__text"><a class="contacts-list__link" href="tel:(+80)123 456 789">(+80)123 456 789</a> <br><a class="contacts-list__link" href="tel:(+80)123 456 789">(+80)123 456 789</a></span>
                        </li>
                        <li class="contacts-list__item">
                            <i class="contacts-list__icon fa-solid fa-map"></i>
                            <span class="contacts-list__text"><a class="contacts-list__link" href="mailto:info@example.com">info@example.com</a></span>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6 col-12 d-flex flex-column mb-4">
                    <div class="footer__title">Магазины</div>
                    <a href="" class="footer__link">Минск</a>
                    <a href="" class="footer__link">Гомель</a>
                    <a href="" class="footer__link">Могилев</a>
                    <a href="" class="footer__link">Брест</a>
                    <a href="" class="footer__link">Гродно</a>
                    <a href="" class="footer__link">Витебск</a>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6 col-12 d-flex flex-column mb-4">
                    <div class="footer__title">Обслуживание</div>
                    <a href="" class="footer__link">Минск</a>
                    <a href="" class="footer__link">Гомель</a>
                    <a href="" class="footer__link">Могилев</a>
                    <a href="" class="footer__link">Брест</a>
                    <a href="" class="footer__link">Гродно</a>
                    <a href="" class="footer__link">Витебск</a>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6 col-12 d-flex flex-column mb-4">
                    <div class="footer__title">Информация</div>
                    <a href="" class="footer__link">Минск</a>
                    <a href="" class="footer__link">Гомель</a>
                    <a href="" class="footer__link">Могилев</a>
                    <a href="" class="footer__link">Брест</a>
                    <a href="" class="footer__link">Гродно</a>
                    <a href="" class="footer__link">Витебск</a>
                </div>
                <div class="col-lg-3 col-md-5 col-sm-6 col-12 mb-4">
                    <div class="footer__title">Instagram</div>
                    <div class="row">
                        <div class="col-4 mb-3">
                            <a href="/assets/images/footer/gallery1.jpg" class="glightbox">
                                <img src="/assets/images/footer/gallery1.jpg" alt="" class="footer__gallery-image">
                            </a>
                        </div>
                        <div class="col-4 mb-3">
                            <a href="/assets/images/footer/gallery1.jpg" class="glightbox">
                                <img src="/assets/images/footer/gallery1.jpg" alt="" class="footer__gallery-image">
                            </a>
                        </div>
                        <div class="col-4 mb-3">
                            <a href="/assets/images/footer/gallery1.jpg" class="glightbox">
                                <img src="/assets/images/footer/gallery1.jpg" alt="" class="footer__gallery-image">
                            </a>
                        </div>
                        <div class="col-4 mb-3">
                            <a href="/assets/images/footer/gallery1.jpg" class="glightbox">
                                <img src="/assets/images/footer/gallery1.jpg" alt="" class="footer__gallery-image">
                            </a>
                        </div>
                        <div class="col-4 mb-3">
                            <a href="/assets/images/footer/gallery1.jpg" class="glightbox">
                                <img src="/assets/images/footer/gallery1.jpg" alt="" class="footer__gallery-image">
                            </a>
                        </div>
                        <div class="col-4 mb-3">
                            <a href="/assets/images/footer/gallery1.jpg" class="glightbox">
                                <img src="/assets/images/footer/gallery1.jpg" alt="" class="footer__gallery-image">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-middle">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-12 d-flex mb-3">
                    ${renderComponent($$result, "SocialLink", $$SocialLink, { "link": "", "social": "facebook" })}
                    ${renderComponent($$result, "SocialLink", $$SocialLink, { "link": "", "social": "instagram" })}
                    ${renderComponent($$result, "SocialLink", $$SocialLink, { "link": "", "social": "youtube" })}
                    ${renderComponent($$result, "SocialLink", $$SocialLink, { "link": "", "social": "viber" })}
                    ${renderComponent($$result, "SocialLink", $$SocialLink, { "link": "", "social": "telegram" })}
                </div>
                <div class="col-xl-5 col-md-6 col-12 mb-3 d-flex align-items-center text-md-start text-center">
                    <div class="footer-middle__title">
                        Оставьте номер и получите <span> скидку до 35%!</span> 
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 col-12 mb-3 d-flex justify-content-end">
                    <form class="footer-form">
                        <input type="tel" class="footer-form__input" placeholder="Ваш номер" required>
                        <button type="submit" class="footer-form__submit">Отправить</button>
                    </form>
                </div>
            </div>

        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-12 d-flex align-items-center justify-content-sm-start justify-content-center mb-3">
                    <div class="footer__copyright">
                        ООО "Зикмес" © 2023 Все права защищены
                     </div>
                </div>
                <div class="col-sm-6 col-12 d-flex justify-content-sm-end justify-content-between align-items-center mb-3">
                    <img src="/assets/images/footer/maestro.png" alt="" class="footer__payment-image">
                    <img src="/assets/images/footer/mastercard.png" alt="" class="footer__payment-image">
                    <img src="/assets/images/footer/visa.png" alt="" class="footer__payment-image">
                    <img src="/assets/images/footer/belcard.png" alt="" class="footer__payment-image">
                    <img src="/assets/images/footer/erip.png" alt="" class="footer__payment-image">
                </div>
            </div>
        </div>
    </div>
</footer>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Sections/Footer.astro");

const $$Astro$o = createAstro();
const $$DropdownMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$DropdownMenu;
  const { products, direction, isStatic } = Astro2.props;
  const className = (isStatic ? "dropdown-hover-menu static " : "dropdown-hover-menu ") + direction;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(className, "class")}>
    <div class="row">
        ${products.map((item) => renderTemplate`<div class="col-lg-6 col-12 mb-3 d-flex flex-column">
                    <a class="dropdown-hover-menu__link dropdown-hover-menu__link_bold"${addAttribute(item.link, "href")}>
                        ${item.category}
                    </a>
                    ${item.items.map((product) => renderTemplate`<a class="dropdown-hover-menu__link"${addAttribute(`/products/${product.link}`, "href")}>${product.name}</a>`)}
                </div>`)}
    </div>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Menu/DropdownMenu/DropdownMenu.astro");

const $$Astro$n = createAstro();
const $$HorizontalMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$HorizontalMenu;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="horizontal-menu">
    <div class="horizontal-menu__item">
        <a href="/" class="horizontal-menu__link">Главная</a>
    </div>
    <div class="horizontal-menu__item">
        <a href="javascript:void(0)" class="horizontal-menu__link">Features</a>
    </div>
    <div class="horizontal-menu__item">
        <a href="/products" class="horizontal-menu__link">Магазин</a>
        <i class="horizontal-menu__icon fa-solid fa-chevron-down"></i>
        ${renderComponent($$result, "DropdownMenu", $$DropdownMenu, { "products": dropdownProducts, "direction": "horizontal" })}
    </div>
    <div class="horizontal-menu__item">
        <a href="/blogs" class="horizontal-menu__link">Блог</a>
    </div>
    <div class="horizontal-menu__item">
        <a href="" class="horizontal-menu__link">Контакты</a>
    </div>
</nav>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Menu/HorizontalMenu/HorizontalMenu.astro");

const $$Astro$m = createAstro();
const $$VerticalMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$VerticalMenu;
  return renderTemplate`${maybeRenderHead($$result)}<div class="vertical-menu">
    <div class="vertical-menu__header">
        <div class="vertical-menu__text">
            <i class="vertical-menu__icon fa-solid fa-bars"></i>
            Все категории
        </div>
        <button class="vertical-menu__open-button"><i class="fa-solid fa-chevron-down"></i></button>
    </div>
    <div class="vertical-menu__container">
        <div class="vertical-menu__item">
            <a class="vertical-menu__link">
                <i class="vertical-menu__icon fa-solid fa-warehouse"></i>
                <span class="vertical-menu__link-text">Теплицы</span>
            </a>
        </div>
        <div class="vertical-menu__item">
            <a class="vertical-menu__link">
                <i class="vertical-menu__icon fa-solid fa-warehouse"></i>
                <span class="vertical-menu__link-text">Теплицы</span>
            </a>
        </div>
        <div class="vertical-menu__item vertical-menu__item_dropdown">
            <a class="vertical-menu__link">
                <i class="vertical-menu__icon fa-solid fa-warehouse"></i>
                <span class="vertical-menu__link-text">Теплицы</span>
            </a>
            <i class="vertical-menu__icon fa-solid fa-chevron-right"></i>
            ${renderComponent($$result, "DropdownMenu", $$DropdownMenu, { "products": dropdownProducts, "direction": "vertical" })}
        </div>
        <div class="vertical-menu__item hidden">
            <a class="vertical-menu__link">
                <i class="vertical-menu__icon fa-solid fa-warehouse"></i>
                <span class="vertical-menu__link-text">Теплицы</span>
            </a>
        </div>
        <div class="vertical-menu__item hidden">
            <a class="vertical-menu__link">
                <i class="vertical-menu__icon fa-solid fa-warehouse"></i>
                <span class="vertical-menu__link-text">Теплицы</span>
            </a>
        </div>
        <div class="vertical-menu__item vertical-menu__item_more-button">
            <a class="vertical-menu__link vertical-menu__link_more-button" href="javascript:void(0)">
                <span class="vertical-menu__link-text">Открыть категории</span>
                <i class="fa-regular fa-square-plus"></i>
            </a>
        </div>
    </div>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Menu/VerticalMenu/VerticalMenu.astro");

const $$Astro$l = createAstro();
const $$SearchBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$SearchBar;
  return renderTemplate`${maybeRenderHead($$result)}<form class="searchBar">
    <select class="searchBar__select">
        <option value="">Все категории</option>
        <option value="">--Категория 1</option>
        <option value="">--Категория 2</option>
        <option value="">---- Подкатегория 2.1</option>
    </select>
    <input type="text" class="searchBar__input" placeholder="Введите запрос">
    <button type="submit" class="searchBar__submit"><i class="fa-solid fa-magnifying-glass"></i></button>
</form>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/SearchBar/SearchBar.astro");

const $$Astro$k = createAstro();
const $$HeaderDesktop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$HeaderDesktop;
  return renderTemplate`${maybeRenderHead($$result)}<div class="header-desktop d-lg-block d-none">
    <div class="header-top">
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <div class="header-top__section header-top__section_separated">
                        <a class="header-top__link">Welcome to Smartech online store</a>
                        <a class="header-top__link"><i class="header-top__icon fa-solid fa-truck"></i> Track
                            your order</a>
                        <a class="header-top__link"><i class="header-top__icon fa-regular fa-envelope"></i> info@example.com</a>
                    </div>
                </div>
                <div class="col-4 d-flex justify-content-end">
                    <div class="header-top__section">
                        <a class="header-top__link" href=""><i class="fa-brands fa-instagram"></i></a>
                        <a class="header-top__link" href=""><i class="fa-brands fa-telegram"></i></a>
                        <a class="header-top__link" href=""><i class="fa-brands fa-viber"></i></a>
                        <a class="header-top__link" href=""><i class="fa-brands fa-vk"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header-container container">
        <div class="row">
            <div class="col-3">
                <a href="/">
                    <img src="/assets/images/header/logo.svg" alt="">
                </a>
            </div>
            <div class="col-4">
                ${renderComponent($$result, "SearchBar", $$SearchBar, {})}
            </div>
            <div class="col-4 d-flex justify-content-center">
                <div class="header__contacts">
                    <div>
                        <i class="header__icon fa-solid fa-headset"></i>
                    </div>
                    <div>
                        <div class="header__text">Горячая линия:</div>
                        <a class="header__link fw-bold" href="tel:">+375 29 111-11-11</a>
                    </div>
                </div>
            </div>
            <div class="col-1 d-flex justify-content-end align-items-end">
                ${renderComponent($$result, "Cart", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Cart/Cart", "client:component-export": "default" })}
            </div>
        </div>
    </div>
    <div class="header-navigation">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    ${renderComponent($$result, "VerticalMenu", $$VerticalMenu, {})}
                </div>
                <div class="col-xl-6 col-9">
                    ${renderComponent($$result, "HorizontalMenu", $$HorizontalMenu, {})}
                </div>
                <div class="col-3 d-xl-flex d-none align-items-center">
                    <a href="" class="header-navigation__link"><i class="fa-regular fa-lightbulb"></i> SPECIAL SALE 30% OFF ON ALL ITEM</a>
                </div>
            </div>
        </div>
    </div>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Header/HeaderDesktop/HeaderDesktop.astro");

const $$Astro$j = createAstro();
const $$MobileMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$MobileMenu;
  return renderTemplate`${maybeRenderHead($$result)}<div class="mobile-menu">
    <nav class="mobile-menu-nav">
        <div class="mobile-menu__item">
            <a href="/" class="mobile-menu__link">Главная</a>
        </div>
        <div class="mobile-menu__item">
            <a href="/" class="mobile-menu__link">Магазин</a>
        </div>
        <div class="mobile-menu__item">
            <a href="javascript:void(0)" class="mobile-menu__link"> Features</a>
            <button class="mobile-menu__collapse-button" type="button" data-bs-toggle="collapse" data-bs-target="#submenu1" aria-expanded="false" aria-controls="submenu1">
                <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="collapse multi-collapse" id="submenu1">
                ${renderComponent($$result, "DropdownMenu", $$DropdownMenu, { "direction": "vertical", "products": dropdownProducts, "isStatic": true })} 
            </div>
        </div>
        <div class="mobile-menu__item">
            <a href="/blogs" class="mobile-menu__link">Блоги</a>
        </div>
        <div class="mobile-menu__item">
            <a href="/" class="mobile-menu__link">
                <i class="fa-solid fa-warehouse"></i>
                Теплицы
            </a>
        </div>
        <div class="mobile-menu__item">
            <a href="/" class="mobile-menu__link">
                <i class="fa-solid fa-screwdriver-wrench"></i>
                Бензопилы
            </a>
        </div>
    </nav>
    <div class="mobile-menu-backdrop"></div>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Header/MobileMenu/MobileMenu.astro");

const $$Astro$i = createAstro();
const $$HeaderMobile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$HeaderMobile;
  return renderTemplate`${maybeRenderHead($$result)}<div class="header-mobile d-lg-none d-block">
    <div class="header-mobile__top">
        <button class="header-mobile__burger">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <a class="header-mobile__logo" href="/">
            <img src="/assets/images/header/logo-mobile.png" alt="" class="header-mobile__image">
        </a>
        ${renderComponent($$result, "Cart", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Cart/Cart", "client:component-export": "default" })}

    </div>
    <div class="header-mobile-form">
        <input class="header-mobile-form__input" type="text" name="search" placeholder="Поиск по магазину">
        <button class="header-mobile-form__submit" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </div>
    ${renderComponent($$result, "MobileMenu", $$MobileMenu, {})}
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Header/HeaderMobile/HeaderMobile.astro");

const $$Astro$h = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="header">
    ${renderComponent($$result, "HeaderDesktop", $$HeaderDesktop, {})}
    ${renderComponent($$result, "HeaderMobile", $$HeaderMobile, {})}
</header>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Sections/Header.astro");

const $$Astro$g = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body>
		${renderComponent($$result, "Header", $$Header, {})}
		${renderSlot($$result, $$slots["default"])}
		${renderComponent($$result, "Footer", $$Footer, {})}
		
	</body>
</html>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/layouts/Layout.astro");

const $$Astro$f = createAstro();
const $$CarouselPagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$CarouselPagination;
  const { images, isControlsActive, paginationType } = Astro2.props;
  let carouselContainerClass = "";
  let paginationContainerClass = "";
  if (paginationType === "vertical") {
    carouselContainerClass = "col-sm-9 col-12";
    paginationContainerClass = "col-sm-3 col-12 px-0";
  }
  if (paginationType === "horizontal") {
    carouselContainerClass = "col-12";
    paginationContainerClass = "col-12 mt-3";
  }
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`carousel slide carousel_pagination ${paginationType}`, "class")} data-bs-ride="carousel" data-bs-interval="60000">
    <div class="row h-100">
        <div${addAttribute(carouselContainerClass, "class")}>
            <div class="carousel-content">
                <div class="carousel-inner">
                    ${images.map((item, index) => renderTemplate`<div${addAttribute(
    index == 0 ? "carousel-item active" : "carousel-item",
    "class"
  )}>
                                <img${addAttribute(item.url || item, "src")}>
                            </div>`)}
                </div>
                ${isControlsActive && renderTemplate`<div class="carousel-buttons">
                            <button class="carousel-control-prev" type="button" data-bs-slide="prev">
                                <i class="fa-solid fa-chevron-left"></i>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-slide="next">
                                <i class="fa-solid fa-chevron-right"></i>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>`}
            </div>
        </div>
        <div${addAttribute(paginationContainerClass, "class")}>
            <div${addAttribute(`carousel-indicators ${paginationType}`, "class")}>
                ${images.map((item, index) => renderTemplate`<button type="button"${addAttribute(index, "data-bs-slide-to")}${addAttribute(index == 0 ? "active" : "", "class")}>
                            <img${addAttribute(item.url || item, "src")}>
                        </button>`)}
            </div>
        </div>
    </div>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Carousel/CarouselPagination.astro");

class MedusaApi {
    constructor() {
        this.medusa = new Medusa({
            maxRetries: 0,
            baseUrl: 'http://localhost:9000/',
        });
    }
    async getProducts() {
        const data = (await this.medusa.products.list()).products;
        return data;
    }


    async getProductByHandle(handle) {
        return ((await this.medusa.products.list({ handle: handle })).products[0]);
    }


    async getCategories() {
        return (await this.medusa.collections.list()).collections;
    }

    async getCart(cartId) {
        const cart = await this.medusa.carts.retrieve(cartId);
        return cart;
    }

    async createCart() {
        const response = await this.medusa.carts.create();
        return response.cart.id;
    }

    async addItemToCart(cartId, variantId, quantity) {
        await this.medusa.carts.lineItems.create(cartId, {
            variant_id: variantId,
            quantity: quantity
        });
    }
    async removeItemFromCart(cartId, lineId) {
        await this.medusa.carts.lineItems.delete(cartId, lineId);
    }

    async getCartItems(cartId) { 
        const data = (await this.medusa.carts.retrieve(cartId)).cart.items;
        return data;
    }

    async cartProccess() {
        try {
            let id;
            id = (await this.medusa.carts.create()).cart.id;
            await this.medusa.carts.lineItems.create(id, {
                variant_id: 'variant_01H00ANWTT7WDHYKCEAE2981N9',
                quantity: 1,
            });
            await this.medusa.carts.createPaymentSessions(id);
            await this.medusa.carts.setPaymentSession(id, {
                provider_id: 'manual'
            });
            await this.medusa.carts.complete(id);
            console.log((await this.medusa.carts.retrieve(id)).cart);
        } catch (error) {
            console.log(error);
        }
    }
}

const medusaApi = new MedusaApi();

const $$Astro$e = createAstro();
const $$Breadcrumbs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { currentPage, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="breadcrumbs">
    <div class="container">
        <div class="breadcrumbs-wrapper">
            ${title && renderTemplate`<h2 class="breadcrumbs__title">${title}</h2>`}
            <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Главная</a></li>
                    <li class="breadcrumb-item active" aria-current="page">
                        ${currentPage}
                    </li>
                </ol>
            </nav>
        </div>
    </div>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Breadcrumbs/Breadcrumbs.astro");

const $$Astro$d = createAstro();
const $$ProductSidebarItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ProductSidebarItem;
  const { handle, title, images } = Astro2.props.product;
  const price = getMinPrice(Astro2.props.product.variants);
  return renderTemplate`${maybeRenderHead($$result)}<div class="product-sidebar__item">
    <div class="row">
        <div class="col-lg-4 col-sm-2 col-4 d-flex align-items-center">
            <a${addAttribute(`/products/${handle}`, "href")}>
                <img class="product-sidebar__image"${addAttribute(images[0]?.url || "/assets/images/products/product1.jpg", "src")} alt="">
            </a>
        </div>
        <div class="col-lg-8 col-sm-10 col-8 d-flex flex-column justify-content-center">
            <a${addAttribute(`/products/${handle}`, "href")} class="product-sidebar__title">
                ${title}
            </a>
            <div class="product-sidebar__price">
                <span class="product-sidebar__actual-price">от ${price} р.</span>
            </div>
        </div>
    </div>

</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/ProductSidebar/ProductSidebarItem/ProductSidebarItem.astro");

const $$Astro$c = createAstro();
const $$ProductSidebarContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ProductSidebarContent;
  const { products } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="product-sidebar">
    ${!products.length ? renderTemplate`<div class="product-sidebar__message">Товары отсутствуют</div>` : products.slice(0, 3).map((item) => renderTemplate`${renderComponent($$result, "ProductSidebarItem", $$ProductSidebarItem, { "product": item })}`)}
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/ProductSidebar/ProductSidebarContent.astro");

const $$Astro$b = createAstro();
const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Sidebar;
  let { title, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="sidebar">
    <div class="sidebar__header">
        ${icon && renderTemplate`<i${addAttribute(`sidebar__icon ${icon}`, "class")}></i>`}
        ${title}
    </div>
    <div class="sidebar__content">
        ${renderSlot($$result, $$slots["default"])}
    </div>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Sidebar/Sidebar.astro");

const $$Astro$a = createAstro();
const $$RelatedProductsSwiper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$RelatedProductsSwiper;
  return renderTemplate`${maybeRenderHead($$result)}<div class="products-swiper swiper">
    <div class="swiper-wrapper">
        ${renderSlot($$result, $$slots["default"])}
    </div>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Swiper/RelatedProductsSwiper.astro");

const $$Astro$9 = createAstro();
const $$RelatedProducts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$RelatedProducts;
  const products = await medusaApi.getProducts();
  return renderTemplate`${maybeRenderHead($$result)}<section class="related-products">
    <div class="container">
        <div class="related-products__header">
            <div class="row">
                <div class="col-xl-11 col-sm-10 col-8">
                    <div class="related-products__title">
                        Рекомендуемые продукты
                    </div>
                </div>
                <div class="col-xl-1 col-sm-2 col-4 d-flex align-items-center justify-contend-end">
                    ${renderComponent($$result, "SwiperNavigation", $$SwiperNavigation, { "element": "related-products-nav" })}
                </div>
            </div>
        </div>
        ${renderComponent($$result, "RelatedProductsSwiper", $$RelatedProductsSwiper, {}, { "default": ($$result2) => renderTemplate`${products.map((item) => renderTemplate`<div class="swiper-slide">
                        ${renderComponent($$result2, "ProductItemCard", $$ProductItemCard, { "product": item })}
                    </div>`)}` })}
    </div>
</section>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Sections/RelatedProducts.astro");

const $$Astro$8 = createAstro();
const $$ReviewForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ReviewForm;
  const { product } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<form class="review-form">
    <div class="review-form__title">Оставить отзыв на:</div>
    <div class="review-form__title fw-bold">${product}</div>
    <div class="review-form__body">
        <div class="row">
            <div class="col-sm-3">
                <div class="review-form__label">Ваша оценка </div>
            </div>
            <div class="col-sm-9">
                <div class="review-form-grade">
                    <div class="review-form-grade__item">
                        <div class="review-form-grade__text">Качество</div>
                        <div class="review-form-grade__container">
                            <label class="review-form-grade__label">
                                <i class="review-form-grade__icon fa-solid fa-star"></i>
                                <input class="review-form-grade__input" type="radio" name="quality" value="1">
                                <div class="review-form-grade__selected-elem">
                                    ${renderComponent($$result, "Grade", $$Grade, { "grade": 1, "isEmptyStars": true })}
                                </div>
                            </label>
                            <label class="review-form-grade__label">
                                <i class="review-form-grade__icon fa-solid fa-star"></i>
                                <input class="review-form-grade__input" type="radio" name="quality" value="2">
                                <div class="review-form-grade__selected-elem">
                                    ${renderComponent($$result, "Grade", $$Grade, { "grade": 2, "isEmptyStars": true })}
                                </div>
                            </label>
                            <label class="review-form-grade__label">
                                <i class="review-form-grade__icon fa-solid fa-star"></i>
                                <input class="review-form-grade__input" type="radio" name="quality" value="3">
                                <div class="review-form-grade__selected-elem">
                                    ${renderComponent($$result, "Grade", $$Grade, { "grade": 3, "isEmptyStars": true })}
                                </div>
                            </label>
                            <label class="review-form-grade__label">
                                <i class="review-form-grade__icon fa-solid fa-star"></i>
                                <input class="review-form-grade__input" type="radio" name="quality" value="4">
                                <div class="review-form-grade__selected-elem">
                                    ${renderComponent($$result, "Grade", $$Grade, { "grade": 4, "isEmptyStars": true })}
                                </div>
                            </label>
                            <label class="review-form-grade__label">
                                <i class="review-form-grade__icon fa-solid fa-star"></i>
                                <input class="review-form-grade__input" type="radio" name="quality" value="5">
                                <div class="review-form-grade__selected-elem">
                                    ${renderComponent($$result, "Grade", $$Grade, { "grade": 5, "isEmptyStars": true })}
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="review-form-grade__item">
                        <div class="review-form-grade__text">Доставка</div>
                        <div class="review-form-grade__container">
                            <label class="review-form-grade__label">
                                <i class="review-form-grade__icon fa-solid fa-star"></i>
                                <input class="review-form-grade__input" type="radio" name="delivery" value="1">
                                <div class="review-form-grade__selected-elem">
                                    ${renderComponent($$result, "Grade", $$Grade, { "grade": 1, "isEmptyStars": true })}
                                </div>
                            </label>
                            <label class="review-form-grade__label">
                                <i class="review-form-grade__icon fa-solid fa-star"></i>
                                <input class="review-form-grade__input" type="radio" name="delivery" value="2">
                                <div class="review-form-grade__selected-elem">
                                    ${renderComponent($$result, "Grade", $$Grade, { "grade": 2, "isEmptyStars": true })}
                                </div>
                            </label>
                            <label class="review-form-grade__label">
                                <i class="review-form-grade__icon fa-solid fa-star"></i>
                                <input class="review-form-grade__input" type="radio" name="delivery" value="3">
                                <div class="review-form-grade__selected-elem">
                                    ${renderComponent($$result, "Grade", $$Grade, { "grade": 3, "isEmptyStars": true })}
                                </div>
                            </label>
                            <label class="review-form-grade__label">
                                <i class="review-form-grade__icon fa-solid fa-star"></i>
                                <input class="review-form-grade__input" type="radio" name="delivery" value="4">
                                <div class="review-form-grade__selected-elem">
                                    ${renderComponent($$result, "Grade", $$Grade, { "grade": 4, "isEmptyStars": true })}
                                </div>
                            </label>
                            <label class="review-form-grade__label">
                                <i class="review-form-grade__icon fa-solid fa-star"></i>
                                <input class="review-form-grade__input" type="radio" name="delivery" value="5">
                                <div class="review-form-grade__selected-elem">
                                    ${renderComponent($$result, "Grade", $$Grade, { "grade": 5, "isEmptyStars": true })}
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="review-form-grade__item">
                        <div class="review-form-grade__text">Цена</div>
                        <div class="review-form-grade__container">
                            <label class="review-form-grade__label">
                                <i class="review-form-grade__icon fa-solid fa-star"></i>
                                <input class="review-form-grade__input" type="radio" name="price" value="1">
                                <div class="review-form-grade__selected-elem">
                                    ${renderComponent($$result, "Grade", $$Grade, { "grade": 1, "isEmptyStars": true })}
                                </div>
                            </label>
                            <label class="review-form-grade__label">
                                <i class="review-form-grade__icon fa-solid fa-star"></i>
                                <input class="review-form-grade__input" type="radio" name="price" value="2">
                                <div class="review-form-grade__selected-elem">
                                    ${renderComponent($$result, "Grade", $$Grade, { "grade": 2, "isEmptyStars": true })}
                                </div>
                            </label>
                            <label class="review-form-grade__label">
                                <i class="review-form-grade__icon fa-solid fa-star"></i>
                                <input class="review-form-grade__input" type="radio" name="price" value="3">
                                <div class="review-form-grade__selected-elem">
                                    ${renderComponent($$result, "Grade", $$Grade, { "grade": 3, "isEmptyStars": true })}
                                </div>
                            </label>
                            <label class="review-form-grade__label">
                                <i class="review-form-grade__icon fa-solid fa-star"></i>
                                <input class="review-form-grade__input" type="radio" name="price" value="4">
                                <div class="review-form-grade__selected-elem">
                                    ${renderComponent($$result, "Grade", $$Grade, { "grade": 4, "isEmptyStars": true })}
                                </div>
                            </label>
                            <label class="review-form-grade__label">
                                <i class="review-form-grade__icon fa-solid fa-star"></i>
                                <input class="review-form-grade__input" type="radio" name="price" value="5">
                                <div class="review-form-grade__selected-elem">
                                    ${renderComponent($$result, "Grade", $$Grade, { "grade": 5, "isEmptyStars": true })}
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="review-form__label">Имя </div>
            </div>
            <div class="col-sm-9">
                <input class="review-form__input" type="text" name="name">
            </div>
            <div class="col-sm-3">
                <div class="review-form__label">Кратко </div>
            </div>
            <div class="col-sm-9">
                <input class="review-form__input" type="text" name="title">
            </div>
            <div class="col-sm-3">
                <div class="review-form__label">Отзыв </div>
            </div>
            <div class="col-sm-9">
                <textarea class="review-form__textarea" name="text" cols="5" rows="3"></textarea>
            </div>
            <div class="col-sm-3 offset-sm-3">
                <button class="review-form__submit">Отправить</button>
            </div>
        </div>
    </div>
</form>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Reviews/ReviewForm/ReviewForm.astro");

const $$Astro$7 = createAstro();
const $$ReviewItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ReviewItem;
  const { author, date, title, text, qualityGrade, deliveryGrade, priceGrade } = Astro2.props.review;
  return renderTemplate`${maybeRenderHead($$result)}<div class="review-item">
    <div class="review-item__title">
        ${title}
    </div>
    <div class="row">
        <div class="col-md-3">
            <div class="review-item__grade">
                <span>Качество</span>
                ${renderComponent($$result, "Grade", $$Grade, { "grade": qualityGrade })}
            </div>
            <div class="review-item__grade">
                <span>Доставка</span>
                ${renderComponent($$result, "Grade", $$Grade, { "grade": deliveryGrade })}
            </div>
            <div class="review-item__grade">
                <span>Цена</span>
                ${renderComponent($$result, "Grade", $$Grade, { "grade": priceGrade })}
            </div>
        </div>
        <div class="col-md-9">
            <p class="review-item__text mb-4">
                ${text}
            </p>
            <div class="review-item__text">Отзыв от <strong>${author}</strong></div>
            <div class="review-item__text">Размещен ${date}</div>
        </div>
    </div>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Reviews/ReviewItem/ReviewItem.astro");

const $$Astro$6 = createAstro();
const $$Reviews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Reviews;
  const { reviews, product } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="reviews">
    <h3 class="reviews__title">Отзывы клиентов</h3>
    <div class="reviews__container">
        ${reviews.map((item) => renderTemplate`${renderComponent($$result, "ReviewItem", $$ReviewItem, { "review": item })}`)}
    </div>
    ${renderComponent($$result, "ReviewForm", $$ReviewForm, { "product": product })}
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Reviews/Reviews.astro");

const $$Astro$5 = createAstro();
const $$Specification = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Specification;
  const { specification } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<table class="product-specification">
    ${specification.map((item) => renderTemplate`<tr class="product-specification__item">
                <td class="product-specification__text">${item.name}</td>
                <td class="product-specification__text">${item.value}</td>
            </tr>`)}
</table>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Specification/Specification.astro");

const $$Astro$4 = createAstro();
const $$ProductCardDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProductCardDetails;
  const { product, reviews } = Astro2.props;
  const specification = getOptions(product);
  return renderTemplate`${maybeRenderHead($$result)}<div class="product-details">
    <div class="product-details__navigation">
        <a href="javascript:void(0)" data-target="details" class="product-details__link active">Детали</a>
        <a href="javascript:void(0)" data-target="specification" class="product-details__link">Характеристики</a>
        <a href="javascript:void(0)" data-target="reviews" class="product-details__link">Отзывы <span class="color-gray">(${reviews.length})</span></a>
        <a href="javascript:void(0)" data-target="one-more" class="product-details__link">Еще одна секция</a>
    </div>
    <div class="product-details__container">
        <div class="product-details__item active" id="details">
            <div class="product-details__description">
                ${product.description}
            </div>
        </div>
        <div class="product-details__item" id="specification">
            ${renderComponent($$result, "Specification", $$Specification, { "specification": specification })}
        </div>
        <div class="product-details__item" id="reviews">
            ${renderComponent($$result, "Reviews", $$Reviews, { "reviews": reviews, "product": product.title })}
        </div>
        <div class="product-details__item" id="one-more">
        </div>
    </div>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/ProductCard/ProductCardDetails/ProductCardDetails.astro");

const $$Astro$3 = createAstro();
const $$ProductCardInfo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProductCardInfo;
  const { number, title, variants, description } = Astro2.props.product;
  const { reviewsCount } = Astro2.props;
  const variantId = Astro2.props.product.variants[0].id;
  const price = getMinPrice(variants);
  return renderTemplate`${maybeRenderHead($$result)}<div class="product-info">
    <h2 class="product-info__title">
        ${title}
    </h2>
    <div class="product-info__price">
        <span class="product-info__actual-price">от ${price} р.</span>
    </div>
    <div class="product-info__grade">
        ${renderComponent($$result, "Grade", $$Grade, { "grade": 5 })}
        <a class="product-info__link" href="#reviews" data-target="reviews">${reviewsCount} отзыва</a>
        <a class="product-info__link" href="#reviews" data-target="reviews">Добавить отзыв</a>
    </div>
    ${renderTemplate`<div class="product-info__stock product-info__stock_available">
                <i class="fa-solid fa-check"></i> В наличии
            </div>` }
    <div class="product-info__number">
        ${number}
    </div>
    <p class="product-info__description">
        ${description}
    </p>
    ${renderComponent($$result, "ProductCardForm", null, { "variantId": variantId, "client:only": true, "client:component-hydration": "only", "client:component-path": "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/ProductCard/ProductCardForm/ProductCardForm", "client:component-export": "ProductCardForm" })}
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/ProductCard/ProductCardInfo/ProductCardInfo.astro");

const $$Astro$2 = createAstro();
const $$ProductCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { product } = Astro2.props;
  const { images } = product;
  const reviewsCount = reviews.length;
  return renderTemplate`${maybeRenderHead($$result)}<section class="product-card">
    <div class="container">
        <div class="row">
            <div class="col-xl-4 col-md-5 col-12 mb-3">
                ${renderComponent($$result, "CarouselPagination", $$CarouselPagination, { "images": images, "isControlsActive": true, "paginationType": "horizontal" })}
            </div>
            <div class="col-xl-8 col-md-7 col-12 mb-3">
                ${renderComponent($$result, "ProductCardInfo", $$ProductCardInfo, { "product": product, "reviewsCount": reviewsCount })}
            </div>
        </div>
        ${renderComponent($$result, "ProductCardDetails", $$ProductCardDetails, { "reviews": reviews, "product": product })}
    </div>
</section>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Sections/ProductCard.astro");

const $$Astro$1 = createAstro();
const $$ProductSidebarMain = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductSidebarMain;
  const { product } = Astro2.props;
  const products = await medusaApi.getProducts();
  return renderTemplate`${maybeRenderHead($$result)}<section class="product-sidebar-main">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-12 order-lg-0 order-1">
                ${renderComponent($$result, "Sidebar", $$Sidebar, { "title": "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0435" }, { "default": ($$result2) => renderTemplate`
                    ${renderComponent($$result2, "ProductSidebarContent", $$ProductSidebarContent, { "products": products })}
                ` })}
                ${renderComponent($$result, "Sidebar", $$Sidebar, { "title": "\u0422\u043E\u0432\u0430\u0440\u044B \u0434\u043B\u044F \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044F" }, { "default": ($$result2) => renderTemplate`
                    ${renderComponent($$result2, "ProductSidebarContent", $$ProductSidebarContent, { "products": [] })}
                ` })}
            </div>
            <div class="col-lg-9 col-12 order-lg-1 order-0">
                ${renderComponent($$result, "ProductCard", $$ProductCard, { "product": product })}
            </div>
        </div>
    </div>
</section>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Sections/ProductSidebarMain.astro");

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const product = await medusaApi.getProductByHandle(id);
  if (!product)
    return Astro2.redirect("/404");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": product.title }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "currentPage": product.title })}
    ${renderComponent($$result2, "ProductSidebarMain", $$ProductSidebarMain, { "product": product })}
    ${renderComponent($$result2, "RelatedProducts", $$RelatedProducts, {})}
` })}`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/pages/products/[id].astro");

const $$file = "D:/Zikmes/20230406_astro-shop/shop-medusa/src/pages/products/[id].astro";
const $$url = "/products/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SwiperNavigation as $, _id_ as _, $$ProductItemCard as a, $$CarouselPagination as b, $$Grade as c, blogs as d, bannersDouble as e, bannersTriple as f, $$Layout as g, getMinPrice as h, $$Sidebar as i, $$ProductSidebarContent as j, $$Breadcrumbs as k, blogSidebarLinks as l, medusaApi as m, $$SocialLink as n };
