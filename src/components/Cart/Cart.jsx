
import './cart.scss';
import CartContainer from './CartContainer/CartContainer';
import CartCounter from './CartCounter/CartCounter';
import { useStore } from '@nanostores/react';
import { useState } from 'react';
import { cartItems } from '../../store/cartProductsStore';
const Cart = () => {
    const products = useStore(cartItems);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenuOpen = () => {
        setMenuOpen(!isMenuOpen);
    }
    return (
        <div className="cart">
            <button className="cart__button" onClick={toggleMenuOpen}>
                <i className="cart__icon fa-solid fa-cart-shopping"></i>
                <div className="cart__text">Корзина</div>
            </button>
            <CartContainer products={products} isMenuOpen={isMenuOpen} />
            <CartCounter counter={products.length} />
        </div>
    )
}

export default Cart;
