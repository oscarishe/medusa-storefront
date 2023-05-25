import './cart-button.scss';
import { useStore } from '@nanostores/react';
import { medusaApi } from '../../scripts/api/medusa';
import { cartItems, getCartItems } from '../../store/cartProductsStore';
export const CartButton = ({ variantId, className }) => {
    const $cartItems = useStore(cartItems);
    const handleButton = async () => {
        let cartId = localStorage.getItem('cartId');
        if (cartId) {
            const cart = await medusaApi.getCart(cartId);
            console.log(cart);
        }
        else {
            cartId = await medusaApi.createCart();
            localStorage.setItem('cartId', cartId);
        }
        await medusaApi.addItemToCart(cartId, variantId, 1);
        cartItems.set(await getCartItems());
    }
    return (
        <button className={`cart-button ${className}`} onClick={handleButton}>
            <i className="fa-solid fa-cart-shopping"></i>
            Добавить в корзину
        </button>
    )
}