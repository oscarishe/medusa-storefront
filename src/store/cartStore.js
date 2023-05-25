import { atom } from 'nanostores';
import { medusaApi } from '../scripts/api/medusa';
export const getCartCount = async () => {
    const cartId = localStorage.getItem('cartId');
    if (cartId) {
        const count = (await medusaApi.getCart(cartId)).cart.items.length;
        return count;
    }
    return 0;
}
export const cartCounter = atom(await getCartCount());