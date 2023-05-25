const metaFields = ['collectionId', 'collectionName', 'created', 'updated', 'expand'];

export const deleteMetaFields = (obj) => {
    metaFields.forEach(field => delete obj[field]);
    return obj;
}

export const getMinPrice = (variants) => {
    const priceArray = variants.map(variant => {
        return variant.prices.map(price => {
            return parseFloat(price.amount/100);
        })
    }).flat();
    return Math.min(...priceArray);
}

export const getOptions = (product) => {
    const options = product.options.reduce((acum, next) =>  ({...acum, [next.id]: next.title}), {});
    const totalOptions = [];
    product.variants.forEach(variant => {
        const variantOptions = variant.options.reduce((acum, next) => ([...acum, {name: options[next.option_id], value:next.value}]), [])
        totalOptions.push([...variantOptions]);
    });
    return totalOptions.flat();
} 