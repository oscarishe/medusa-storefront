import { useState } from 'react';
import { useStore } from '@nanostores/react';
import {medusaApi} from '../../../scripts/api/medusa';
import { cartItems, getCartItems } from '../../../store/cartProductsStore';

export const ProductCardForm = ({variantId}) => {
    const [count, setCount] = useState(1);
    const $cartItems = useStore(cartItems);
    const handleSubmit = async (e) => {
        e.preventDefault();
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
    const handleChange = (e) => {
        setCount(e.target.value);

    }
    return (
        <form className="product-info-form" onSubmit={handleSubmit}>
            <label className="product-info-form__label" htmlFor="count">Кол-во</label>
            <input className="product-info-form__input" type="number" name="count" id="count" value={count} onChange={handleChange}/>
            <button className="product-info-form__submit" type="submit"><i className="fa-solid fa-cart-plus"></i> Добавить</button>
        </form>
    )
}