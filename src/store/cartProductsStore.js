import { atom } from 'nanostores';
import { medusaApi } from '../scripts/api/medusa';
export const getCartItems= async () => {
    const cartId = localStorage.getItem('cartId');
    if (cartId) {
        const items = await medusaApi.getCartItems(cartId);
        return items;
    }
    return [];
}
export const cartItems = atom(await getCartItems());