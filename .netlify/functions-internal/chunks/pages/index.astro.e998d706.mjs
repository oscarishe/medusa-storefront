import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, f as renderSlot } from '../astro.948111e9.mjs';
import 'html-escaper';
/* empty css                           */import { $ as $$SwiperNavigation, a as $$ProductItemCard, b as $$CarouselPagination, c as $$Grade, d as blogs, m as medusaApi, e as bannersDouble, f as bannersTriple, g as $$Layout, h as getMinPrice, i as $$Sidebar, j as $$ProductSidebarContent, k as $$Breadcrumbs } from './_id_.astro.962cf4c6.mjs';
/* empty css                           *//* empty css                           */
const $$Astro$p = createAstro();
const $$Banner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Banner;
  const { link, imgSrc } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="banner">
    <a${addAttribute(link, "href")} class="banner__link">
        <img${addAttribute(imgSrc, "src")} alt="" class="banner__image">
    </a>
    
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Banner/Banner.astro");

const $$Astro$o = createAstro();
const $$Banners = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Banners;
  const { banners } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="banners">
    <div class="container">
        <div class="row">
            <!-- <div class="col">
                <Banner link="#" imgSrc="/assets/images/banners/banner1.png" />
            </div>
            <div class="col">
                <Banner link="#" imgSrc="/assets/images/banners/banner1.png" />
            </div> -->
            ${banners.map((item) => renderTemplate`<div class="col-md mb-3">
                        ${renderComponent($$result, "Banner", $$Banner, { "link": item.link, "imgSrc": item.imgSrc })}
                    </div>`)}
        </div>
    </div>
</section>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Sections/Banners.astro");

const $$Astro$n = createAstro();
const $$Carousel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Carousel;
  return renderTemplate`${maybeRenderHead($$result)}<div class="carousel slide carousel-main" data-bs-ride="true" data-bs-interval="100000">
    <div class="carousel-indicators">
      <button type="button" data-bs-slide-to="0" class="active" aria-label="Slide 1"></button>
      <button type="button" data-bs-slide-to="1" aria-label="Slide 2"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/assets/images/main/item-1.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/assets/images/main/item-3.png" class="d-block w-100" alt="...">
      </div>
    </div>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Carousel/Carousel.astro");

const $$Astro$m = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Main;
  return renderTemplate`${maybeRenderHead($$result)}<section class="main">
    <div class="container">
        <div class="row">
            <div class="offset-lg-3 col-lg-7 col-md-9 col-12">
                ${renderComponent($$result, "Carousel", $$Carousel, {})}
            </div>
            <div class="col-lg-2 col-3 d-md-block d-none text-center">
                <div class="banner-container">
                    ${renderComponent($$result, "Banner", $$Banner, { "link": "#", "imgSrc": "/assets/images/main/banner1.jpg" })}
                    ${renderComponent($$result, "Banner", $$Banner, { "link": "#", "imgSrc": "/assets/images/main/banner1.jpg" })}
                </div>
            </div>
        </div>
    </div>
</section>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Sections/Main.astro");

const $$Astro$l = createAstro();
const $$PopularItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$PopularItem;
  const { imgSrc, name, link, count } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="swiper-slide">
    <a${addAttribute(link, "href")}>
        <div class="popular-item">
            <img${addAttribute(imgSrc, "src")}${addAttribute("", "alt")} class="popular-item__image">
            <div class="popular-item__title">${name}</div>
            <div class="popular-item__counter">${count} товаров</div>
        </div>
    </a>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/PopularItem/PopularItem.astro");

const $$Astro$k = createAstro();
const $$SectionTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<h2 class="section-title">
    <span class="section-title__text">${text}</span>
</h2>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/SectionTitle/SectionTitle.astro");

const $$Astro$j = createAstro();
const $$ProductsSwiper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$ProductsSwiper;
  return renderTemplate`${maybeRenderHead($$result)}<div class="products-swiper swiper">
    <div class="swiper-wrapper">
        ${renderSlot($$result, $$slots["default"])}
    </div>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Swiper/ProductsSwiper.astro");

const $$Astro$i = createAstro();
const $$PopularCategories = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$PopularCategories;
  let { categories } = Astro2.props;
  categories = [...categories, ...categories];
  return renderTemplate`${maybeRenderHead($$result)}<section class="popular-categories">
    <div class="container">
        <div class="row">
            <div class="col-xl-11 col-sm-10 col-8">
                ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "text": "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438" })}
            </div>
            <div class="col-xl-1 col-sm-2 col-4">
                ${renderComponent($$result, "SwiperNavigation", $$SwiperNavigation, { "element": "products-swiper-nav" })}
            </div>
            ${renderComponent($$result, "ProductsSwiper", $$ProductsSwiper, {}, { "default": ($$result2) => renderTemplate`${categories.map((item) => renderTemplate`${renderComponent($$result2, "PopularItem", $$PopularItem, { "imgSrc": item.img || "/assets/images/products/product1.jpg", "name": item.title, "link": item.handle, "count": 10 })}`)}` })}
        </div>
    </div>
</section>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Sections/PopularCategories.astro");

const $$Astro$h = createAstro();
const $$CategoriesSwitcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$CategoriesSwitcher;
  const { categories } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="categories-switcher">
    <div class="categories-switcher__container">
        ${categories.map((item, index) => renderTemplate`<button${addAttribute("categories-switcher__button" + (index == 0 ? " active" : ""), "class")}${addAttribute(item.nandle, "value")}> ${item.title}</button>`)}
    </div>
    <select class="categories-switcher__select">
        ${categories.map((item) => renderTemplate`<option${addAttribute(item.nandle, "value")}> ${item.title}</option>`)}
    </select>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/CategoriesSwitcher/CategoriesSwitcher.astro");

const $$Astro$g = createAstro();
const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Products;
  const { title, products, categories } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="products">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-sm-9 col-6">
                ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "text": title })}
            </div>
            <div class="col-lg-6 col-sm-3 col-6 d-flex justify-content-lg-start justify-content-end align-items-center">
                ${renderComponent($$result, "CategoriesSwitcher", $$CategoriesSwitcher, { "categories": categories })}
            </div>
            <!-- <div class="row mt-4"> -->
            <div class="products__container">
                ${products.map((item) => renderTemplate`${renderComponent($$result, "ProductItemCard", $$ProductItemCard, { "product": item })}`)}
            </div>
        </div>
    </div>
</section>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Sections/Products.astro");

const $$Astro$f = createAstro();
const $$LightCountDown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$LightCountDown;
  return renderTemplate`${maybeRenderHead($$result)}<div class="lightcountdown">

</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/LightCountDown/LightCountDown.astro");

const $$Astro$e = createAstro();
const $$SpecialOfferItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$SpecialOfferItem;
  const { link, images, title, price, oldPrice, grade, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="special-offer">
    <div class="row">
        <div class="col-md-7 col-12 mb-3">
            ${renderComponent($$result, "CarouselPagination", $$CarouselPagination, { "images": images, "isControlsActive": false, "paginationType": "vertical" })}
        </div>
        <div class="col-md-5 col-12">
            <a class="special-offer__title"${addAttribute(link, "href")}>${title}</a>
            <div class="special-offer__price">
                <span class="special-offer__actual-price">${price} р.</span>
                ${oldPrice ? renderTemplate`<span class="special-offer__old-price">
                            ${oldPrice} р.
                        </span>` : ""}
            </div>
            ${renderComponent($$result, "Grade", $$Grade, { "grade": grade })}
            <p class="special-offer__description">
                ${description}
            </p>
            <button class="special-offer__button">
                <i class="fa-solid fa-cart-shopping"></i>
                Добавить в корзину
            </button>
            ${renderComponent($$result, "LightCountDown", $$LightCountDown, {})}
        </div>
    </div>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/SpecialOffer/SpecialOfferItem.astro");

const $$Astro$d = createAstro();
const $$SpecialOffer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SpecialOffer;
  const specialOffer = {
    link: "#",
    title: "\u0422\u0435\u043F\u043B\u0438\u0446\u0430 \u0441\u0438\u0431\u0438\u0440\u0441\u043A\u0430\u044F \u041C\u0438\u043D\u0438",
    images: [
      "/assets/images/specialOffer/so1.jpg",
      "/assets/images/specialOffer/so1.jpg",
      "/assets/images/specialOffer/so1.jpg"
    ],
    price: 777,
    oldPrice: 879,
    grade: 4,
    description: "Lorem Ipsum - \u044D\u0442\u043E \u0442\u0435\u043A\u0441\u0442-\u0440\u044B\u0431\u0430, \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0432 \u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044D\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0435. Lorem Ipsum \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 \u0440\u044B\u0431\u043E\u0439 \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043D\u0430 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 XVI \u0432\u0435\u043A\u0430."
  };
  return renderTemplate`${maybeRenderHead($$result)}<section class="products">
    <div class="container">
        <div class="row">
            <div class="col-12">
                ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "text": "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043D\u044F" })}
            </div>
            <div class="col-xl-7 col-lg-8 mt-4">
                ${renderComponent($$result, "SpecialOfferItem", $$SpecialOfferItem, { "link": specialOffer.link, "title": specialOffer.title, "images": specialOffer.images, "price": specialOffer.price, "oldPrice": specialOffer.oldPrice, "grade": specialOffer.grade, "description": specialOffer.description })}
            </div>
        </div>
    </div>
</section>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Sections/SpecialOffer.astro");

const $$Astro$c = createAstro();
const $$BlogItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$BlogItem;
  const { imgSrc, imgAlt, title, date, author, id, description, modifier } = Astro2.props;
  const itemClass = modifier ? `blog-item blog-item_${modifier}` : `blog-item`;
  return renderTemplate`${maybeRenderHead($$result)}<div class="swiper-slide">
    <div${addAttribute(itemClass, "class")}>
        <a${addAttribute(`/blogs/${id}`, "href")}>
            <img${addAttribute(imgSrc, "src")}${addAttribute(imgAlt, "alt")} class="blog-item__image">
        </a>
        <div class="blog-item__info">
            <div class="blog-item__date">
                <i class="blog-item__icon fa-regular fa-calendar-days"></i>
                ${date}
            </div>
            <div class="blog-item__author">
                <span class="blog-item__text">Author: </span>
                <i class="blog-item__icon fa-regular fa-user"></i>
                <span>${author}</span>
            </div>
        </div>
        <a class="blog-item__title"${addAttribute(`/blogs/${id}`, "href")}>
            ${title}
        </a>
        <p class="blog-item__description">
            ${description}
        </p>
        <a${addAttribute(`/blogs/${id}`, "href")} class="blog-item__link">
            Подробнее
            <i class="fa-regular fa-square-plus"></i>
        </a>
    </div>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/BlogItem/BlogItem.astro");

const $$Astro$b = createAstro();
const $$BlogSwiper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$BlogSwiper;
  return renderTemplate`${maybeRenderHead($$result)}<div class="blogs-swiper swiper">
    <div class="swiper-wrapper">
        ${renderSlot($$result, $$slots["default"])}
    </div>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Swiper/BlogSwiper.astro");

const $$Astro$a = createAstro();
const $$BlogsMain = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$BlogsMain;
  return renderTemplate`${maybeRenderHead($$result)}<section class="blogs-main">
    <div class="container">
        <div class="row">
            <div class="col-xl-11 col-sm-10 col-4">
                ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "text": "\u0411\u043B\u043E\u0433" })}
            </div>
            <div class="col-xl-1 col-sm-2 col-8">
                ${renderComponent($$result, "SwiperNavigation", $$SwiperNavigation, { "element": "blogs-nav" })}
            </div>
        </div>
        <div class="mt-4">
            ${renderComponent($$result, "BlogSwiper", $$BlogSwiper, {}, { "default": ($$result2) => renderTemplate`${blogs.map((item) => renderTemplate`${renderComponent($$result2, "BlogItem", $$BlogItem, { "imgSrc": item.imgSrc, "imgAlt": item.imgAlt, "title": item.title, "date": item.date, "author": item.author, "id": item.id, "modifier": "swiper", "description": item.description })}`)}` })}
        </div>
    </div>
</section>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Sections/BlogsMain.astro");

const $$Astro$9 = createAstro();
const $$AdvantageItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$AdvantageItem;
  const { imgSrc, imgAlt, title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="advantage-item">
    <div class="row">
        <div class="col-5 text-center">
            <img${addAttribute(imgSrc, "src")}${addAttribute(imgAlt || "", "alt")} class="advantage-item__image">
        </div>
        <div class="col-7 ps-0 d-flex flex-column justify-content-center">
            <div class="advantage-item__title">${title}</div>
            <div class="advantage-item__subtitle">${subtitle}</div>
        </div>
    </div>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/AdvantageItem/AdvantageItem.astro");

const $$Astro$8 = createAstro();
const $$Advantages = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Advantages;
  return renderTemplate`${maybeRenderHead($$result)}<section class="advantages">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg col-md-4 col-sm-6 col-12 mb-3">
                ${renderComponent($$result, "AdvantageItem", $$AdvantageItem, { "imgSrc": "/assets/images/advantages/icon-1.jpg", "imgAlt": "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E", "title": "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430", "subtitle": "\u041F\u043E \u0432\u0441\u0435\u0439 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438" })}
            </div>
            <div class="col-lg col-md-4 col-sm-6 col-12 mb-3">
                ${renderComponent($$result, "AdvantageItem", $$AdvantageItem, { "imgSrc": "/assets/images/advantages/icon-2.jpg", "imgAlt": "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E", "title": "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430", "subtitle": "\u041F\u043E \u0432\u0441\u0435\u0439 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438" })}
            </div>
            <div class="col-lg col-md-4 col-sm-6 col-12 mb-3">
                ${renderComponent($$result, "AdvantageItem", $$AdvantageItem, { "imgSrc": "/assets/images/advantages/icon-3.jpg", "imgAlt": "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E", "title": "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430", "subtitle": "\u041F\u043E \u0432\u0441\u0435\u0439 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438" })}
            </div>
            <div class="col-lg col-md-4 col-sm-6 col-12 mb-3">
                ${renderComponent($$result, "AdvantageItem", $$AdvantageItem, { "imgSrc": "/assets/images/advantages/icon-4.jpg", "imgAlt": "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E", "title": "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430", "subtitle": "\u041F\u043E \u0432\u0441\u0435\u0439 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438" })}
            </div>
            <div class="col-lg col-md-4 col-sm-6 col-12 mb-3">
                ${renderComponent($$result, "AdvantageItem", $$AdvantageItem, { "imgSrc": "/assets/images/advantages/icon-5.jpg", "imgAlt": "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E", "title": "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430", "subtitle": "\u041F\u043E \u0432\u0441\u0435\u0439 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438" })}
            </div>
        </div>
    </div>
</section>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Sections/Advantages.astro");

const $$Astro$7 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$1;
  const products = await medusaApi.getProducts();
  const categories = await medusaApi.getCategories();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "Main", $$Main, {})}
    ${renderComponent($$result2, "PopularCategories", $$PopularCategories, { "categories": categories })}
    ${renderComponent($$result2, "Banners", $$Banners, { "banners": bannersDouble })}
    ${renderComponent($$result2, "Products", $$Products, { "title": "\u041D\u043E\u0432\u044B\u0435 \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F", "products": products, "categories": categories })}
    ${renderComponent($$result2, "Banners", $$Banners, { "banners": bannersTriple })}
    ${renderComponent($$result2, "SpecialOffer", $$SpecialOffer, {})}
    ${renderComponent($$result2, "Products", $$Products, { "title": "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B", "products": products, "categories": categories })}
    ${renderComponent($$result2, "BlogsMain", $$BlogsMain, {})}
    ${renderComponent($$result2, "Advantages", $$Advantages, {})}
` })}`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/pages/index.astro");

const $$file$1 = "D:/Zikmes/20230406_astro-shop/shop-medusa/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$CategoriesProductHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CategoriesProductHeader;
  return renderTemplate`${maybeRenderHead($$result)}<div class="categories__header">
    <div class="categories__section">
        <span class="categories__text fw-bold me-2">Вывод</span>
        <button class="categories__button active" data-type="grid">
            <i class="fa-solid fa-table-cells-large"></i>
        </button>
        <button class="categories__button" data-type="list">
            <i class="fa-solid fa-list"></i>
        </button>
        <span class="ms-4 categories__text fw-bold">Товары 1-12 из 16</span>
    </div>
    <div class="categories__section">
        <span class="categories__text me-2">Сортировать по:</span>
        <select name="sort-by" class="categories__select">
            <option>Цена</option>
            <option>Название</option>
            <option>Позиция</option>
        </select>
        <button class="categories__button categories__button_no-border">
            <i class="fa-solid fa-up-long"></i>
        </button>
    </div>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/CategoriesProducts/CategoriesProductHeader/CategoriesProductHeader.astro");

const $$Astro$5 = createAstro();
const $$ProductItemList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ProductItemList;
  const { handle, images, title, description } = Astro2.props.product;
  const variantId = Astro2.props.product.variants[0].id;
  const price = getMinPrice(Astro2.props.product.variants);
  return renderTemplate`${maybeRenderHead($$result)}<div class="product-item-list">
    <div class="row">
        <div class="col-sm-4 col-12">
            <a${addAttribute(`/products/${handle}`, "href")}>
            <img class="product-item-list__image"${addAttribute(images[0]?.url || "/assets/images/products/product1.jpg", "src")} alt="">
        </a>
        </div>
        <div class="col-sm-8 col-12 d-flex flex-column">
            <a${addAttribute(`/products/${handle}`, "href")} class="product-item-list__title">${title}</a>
            ${renderComponent($$result, "Grade", $$Grade, { "grade": 5 })}
            <div class="product-item-list__price">
                <span class="product-item-list__actual-price">от ${price} р.</span>
            </div>
            <p class="product-item-list__description">
                ${description}
            </p>
            ${renderComponent($$result, "CartButton", null, { "variantId": variantId, "className": "product-item-list__button", "client:only": true, "client:component-hydration": "only", "client:component-path": "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Buttons/CartButton", "client:component-export": "CartButton" })}
        </div>

    </div>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/ProductItem/ProductItemList/ProductItemList.astro");

const $$Astro$4 = createAstro();
const $$CategoriesProductContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CategoriesProductContainer;
  const { products, type } = Astro2.props;
  const containerClassname = `categories__container categories__container_${type}`;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(containerClassname, "class")}>
    <!-- {type === 'grid' && products.map((item) => <ProductItemCard product={item}/>)}
    {type === 'list' && products.map((item) => <ProductItemList product={item}/>)} -->
    ${products.map((item) => renderTemplate`${renderComponent($$result, "ProductItemCard", $$ProductItemCard, { "product": item })}`)}
    ${products.map((item) => renderTemplate`${renderComponent($$result, "ProductItemList", $$ProductItemList, { "product": item })}`)}
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/CategoriesProducts/CategoriesProductContainer/CategoriesProductContainer.astro");

const $$Astro$3 = createAstro();
const $$CategoriesProducts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CategoriesProducts;
  const products = await medusaApi.getProducts();
  return renderTemplate`${maybeRenderHead($$result)}<div class="categories__content">
    ${renderComponent($$result, "CategoriesProductHeader", $$CategoriesProductHeader, {})}
    ${renderComponent($$result, "CategoriesProductContainer", $$CategoriesProductContainer, { "products": products, "type": "grid" })}
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/CategoriesProducts/CategoriesProducts.astro");

const $$Astro$2 = createAstro();
const $$Filters = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Filters;
  return renderTemplate`${maybeRenderHead($$result)}<div class="filters">
    <form id="filters">
        <div class="filters__section">
            <div class="filters__title">Цена</div>
            <div class="filters__range" id="price-range"></div>
            <div class="filters__range-section">
                <label>
                    <span>От</span>
                    <input type="number" name="price-range-from" id="price-range-from" value="0">
                </label>
                <label>
                    <span>До</span>
                    <input type="number" name="price-range-to" id="price-range-to" value="1500">
                </label>
            </div>
        </div>
        <div class="filters__section">
            <div class="filters__title">Цвет</div>
            <div class="filters__flex-container">
                <label class="filters__label">
                    <input class="filters__radio" type="radio" name="color" value="Черный">
                    <span>
                        <i style="background-color:black"></i>
                    </span>
                </label>
                <label class="filters__label">
                    <input class="filters__radio" type="radio" name="color" value="Белый">
                    <span>
                        <i style="background-color:white"></i>
                    </span>
                </label>
                <label class="filters__label">
                    <input class="filters__radio" type="radio" name="color" value="Синий">
                    <span>
                        <i style="background-color:blue"></i>
                    </span>
                </label>
                <label class="filters__label">
                    <input class="filters__radio" type="radio" name="color" value="Красный">
                    <span>
                        <i style="background-color:red"></i>
                    </span>
                </label>
                <label class="filters__label">
                    <input class="filters__radio" type="radio" name="color" value="Зеленый">
                    <span>
                        <i style="background-color:green"></i>
                    </span>
                </label>
                <label class="filters__label">
                    <input class="filters__radio" type="radio" name="color" value="Желтый">
                    <span>
                        <i style="background-color:yellow"></i>
                    </span>
                </label>
            </div>
        </div>
        <div class="filters__section">
            <div class="filters__title">Тип товара</div>
            <label class="filters__label filters__label_text">
                <input class="filters__radio" type="radio" name="type" value="Теплица">
                <span>Теплица (15)</span>
            </label>
            <label class="filters__label filters__label_text">
                <input class="filters__radio" type="radio" name="type" value="Беседка">
                <span>Беседка (9)</span>
            </label>
            <label class="filters__label filters__label_text">
                <input class="filters__radio" type="radio" name="type" value="Поликарбонат">
                <span>Поликарбонат (6)</span>
            </label>
            <label class="filters__label filters__label_text">
                <input class="filters__radio" type="radio" name="type" value="Бензопила">
                <span>Бензопила (11)</span>
            </label>
        </div>
        <div class="filters__section">
            <div class="filters__title">Длина</div>
            <div class="filters__flex-container">
                <label class="filters__label">
                    <input class="filters__radio" type="radio" name="length" value="2">
                    <span> 2 м.</span>
                </label>
                <label class="filters__label">
                    <input class="filters__radio" type="radio" name="length" value="4">
                    <span> 4 м.</span>
                </label>
                <label class="filters__label">
                    <input class="filters__radio" type="radio" name="length" value="6">
                    <span> 6 м.</span>
                </label>
                <label class="filters__label">
                    <input class="filters__radio" type="radio" name="length" value="8">
                    <span> 8 м.</span>
                </label>
                <label class="filters__label">
                    <input class="filters__radio" type="radio" name="length" value="10">
                    <span> 10 м.</span>
                </label>
            </div>
        </div>
        <div class="filters__section">
            <div class="filters__title">Производитель</div>
            <label class="filters__label filters__label_text">
                <input class="filters__radio" type="radio" name="producer" value="Производитель 1">
                <span>Производитель 1 (5)</span>
            </label>
            <label class="filters__label filters__label_text">
                <input class="filters__radio" type="radio" name="producer" value="Производитель 2">
                <span>Производитель 2 (12) </span>
            </label>
            <label class="filters__label filters__label_text">
                <input class="filters__radio" type="radio" name="producer" value="Производитель 3">
                <span>Производитель 3 (14)</span>
            </label>
            <label class="filters__label filters__label_text">
                <input class="filters__radio" type="radio" name="producer" value="Производитель 4">
                <span>Производитель 4 (3)</span>
            </label>
        </div>
    </form>
</div>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Filters/Filters.astro");

const $$Astro$1 = createAstro();
const $$CategoriesPageSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CategoriesPageSection;
  return renderTemplate`${maybeRenderHead($$result)}<section class="categories">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-4 col-12 order-md-0 order-1">
                ${renderComponent($$result, "Sidebar", $$Sidebar, { "title": "\u0424\u0438\u043B\u044C\u0442\u0440\u044B", "icon": "fa-solid fa-filter" }, { "default": ($$result2) => renderTemplate`
                    ${renderComponent($$result2, "Filters", $$Filters, {})}       
                ` })}
                ${renderComponent($$result, "Sidebar", $$Sidebar, { "title": "\u0422\u043E\u0432\u0430\u0440\u044B \u0434\u043B\u044F \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044F" }, { "default": ($$result2) => renderTemplate`
                    ${renderComponent($$result2, "ProductSidebarContent", $$ProductSidebarContent, { "products": [] })}
                ` })}
            </div>
            <div class="col-lg-9 col-md-8 col-12 order-md-1 order-0">
                ${renderComponent($$result, "CategoriesProducts", $$CategoriesProducts, {})}
            </div>
        </div>
    </div>
</section>`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/components/Sections/CategoriesPageSection.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0422\u043E\u0432\u0430\u0440\u044B \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "currentPage": "\u0422\u043E\u0432\u0430\u0440\u044B \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430" })}
    ${renderComponent($$result2, "CategoriesPageSection", $$CategoriesPageSection, {})}
` })}`;
}, "D:/Zikmes/20230406_astro-shop/shop-medusa/src/pages/products/index.astro");

const $$file = "D:/Zikmes/20230406_astro-shop/shop-medusa/src/pages/products/index.astro";
const $$url = "/products";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogItem as $, index as a, index$1 as i };
