import PocketBase from 'pocketbase';
import { deleteMetaFields } from '../util/util.js';

export const getProducts = async () => {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const resultList = await pb.collection('products').getList(1, 50);
    const products = Array.from(resultList.items.values()).map(item => deleteMetaFields(item));
    return products;
}

export const getProductByCategory = async (category) => {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const categories = await getCategories();

    const key = categories.find(item => category.toLowerCase() === item.name.toLowerCase()).id;
    console.log(key);
    const resultList = await pb.collection('products').getList(1, 50);
    const products = Array.from(resultList.items.values()).map(item => deleteMetaFields(item));
    console.log(products.length);
    return products;
}

export const getCategories = async () => {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const resultList = await pb.collection('categories').getList(1, 50);
    const categories = Array.from(resultList.items.values()).map(item => deleteMetaFields(item));
    return categories;
}