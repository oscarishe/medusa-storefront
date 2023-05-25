export const products = [
    {
        number: 'TSM 325085923123',
        id: 'sibirskaya',
        images: ['/assets/images/products/product1.jpg', '/assets/images/products/product1.jpg', '/assets/images/products/product1.jpg', '/assets/images/products/product1.jpg'],
        title: 'Теплица "Сибирская" мини ',
        grade: 4,
        price: 777,
        oldPrice: 799,
        isAvailable: true,
        specification:
            [
                {
                    name: 'Ширина',
                    value: '2 метра'
                },
                {
                    name: 'Длина',
                    value: '6 метров'
                },
                {
                    name: 'Шаг дуг',
                    value: '0.5 метра'
                }
            ],
        description: 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века.'
    },
    {
        number: 'TSM 325085923123',
        id: 'sibirskaya',
        images: ['/assets/images/products/product1.jpg', '/assets/images/products/product1.jpg', '/assets/images/products/product1.jpg', '/assets/images/products/product1.jpg'],
        title: 'Теплица "Сибирская" мини ',
        grade: 4,
        price: 777,
        isOnSale: true,
        isAvailable: true,
        specification:
            [
                {
                    name: 'Ширина',
                    value: '2 метра'
                },
                {
                    name: 'Длина',
                    value: '6 метров'
                },
                {
                    name: 'Шаг дуг',
                    value: '0.5 метра'
                }
            ],
        description: 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века.'
    },
    {
        number: 'TSM 325085923123',
        id: 'sibirskaya',
        images: ['/assets/images/products/product1.jpg', '/assets/images/products/product1.jpg', '/assets/images/products/product1.jpg', '/assets/images/products/product1.jpg'],
        title: 'Теплица "Сибирская" мини ',
        grade: 4,
        price: 777,
        isAvailable: true,
        specification:
            [
                {
                    name: 'Ширина',
                    value: '2 метра'
                },
                {
                    name: 'Длина',
                    value: '6 метров'
                },
                {
                    name: 'Шаг дуг',
                    value: '0.5 метра'
                }
            ],
        description: 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века.'
    },
    {
        number: 'TSM 325085923123',
        id: 'sibirskaya',
        images: ['/assets/images/products/product1.jpg', '/assets/images/products/product1.jpg', '/assets/images/products/product1.jpg', '/assets/images/products/product1.jpg'],
        title: 'Теплица "Сибирская" мини ',
        grade: 4,
        price: 777,
        isAvailable: true,
        specification:
            [
                {
                    name: 'Ширина',
                    value: '2 метра'
                },
                {
                    name: 'Длина',
                    value: '6 метров'
                },
                {
                    name: 'Шаг дуг',
                    value: '0.5 метра'
                }
            ],
        description: 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века.'
    },
    {
        number: 'TSM 325085923123',
        id: 'sibirskaya',
        images: ['/assets/images/products/product1.jpg', '/assets/images/products/product1.jpg', '/assets/images/products/product1.jpg', '/assets/images/products/product1.jpg'],
        title: 'Теплица "Сибирская" мини ',
        grade: 4,
        price: 777,
        isAvailable: true,
        specification:
            [
                {
                    name: 'Ширина',
                    value: '2 метра'
                },
                {
                    name: 'Длина',
                    value: '6 метров'
                },
                {
                    name: 'Шаг дуг',
                    value: '0.5 метра'
                }
            ],
        description: 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века.'
    },
]

// export const doubleProducts = [...products, ...products];

export const bannersDouble = [
    {
        imgSrc: '/assets/images/banners/banner1.png',
        link: '#',
    },
    {
        imgSrc: '/assets/images/banners/banner1.png',
        link: '#',
    }
]

export const bannersTriple = [
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
]

export const categories = [
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
]

export const blogs = [
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
]

export const dropdownProducts = [
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
]

export const reviews = [
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
]

export const blogSidebarLinks = [
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
]

export const socialIcons = {
    facebook: 'fa-brands fa-facebook-f',
    twitter: 'fa-brands fa-twitter',
    instagram: 'fa-brands fa-instagram',
    youtube: 'fa-brands fa-youtube',
    viber: 'fa-brands fa-viber',
    telegram: 'fa-solid fa-paper-plane',
}