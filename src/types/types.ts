export interface IProduct {
    number: string,
    id: string,
    productId: string,
    images: string[],
    title: string,
    grade: number,
    price: number,
    isAvailable: boolean,
    category: string,
    description: string,
    specification: ISpecification[],
    oldPrice?: number,
    isOnSale?: boolean,
}

export interface IBanner {
    imgSrc: string,
    link: string,
}

export interface ICategory {
    id: string,
    name: string,
    link: string,
    img: string,
}

export interface ILink {
    link: string,
    text: string,
}

export interface IDropdownProducts {
    category: string,
    link: string,
    items: {
        name: string,
        link: string,
    }[]
}

export interface ISpecification {
    name: string,
    value: string,
}

export interface IReview {
    author: string,
    date: string,
    title: string,
    text: string,
    qualityGrade: number,
    deliveryGrade: number,
    priceGrade: number,
}

export interface IBlog {
    id: number,
    imgSrc: string,
    imgAlt: string,
    title: string,
    date: string,
    author: string,
    description: string,
    categories: ICategory[],
    text: string,
}