import { useStore } from '@nanostores/react';
import { medusaApi } from '../../../scripts/api/medusa';
import './cart-container-item.scss';
import { cartItems, getCartItems } from '../../../store/cartProductsStore';


const CartContainerItem = ({product}) => {
    const $cartItems = useStore(cartItems); 
    const {title, unit_price, quantity, thumbnail} = product;
    const cartId = localStorage.getItem('cartId');
    const handle = product.variant.product.handle;
    const price = parseFloat(unit_price/100);
    const removeItem = async () => {
        await medusaApi.removeItemFromCart(cartId, product.id);
        cartItems.set(await getCartItems(cartId))
    }
    return (
        <div className="cart-container-item">
            <div className="row">
                <div className="col-3">
                    <a href={`/products/${handle}`}>
                        <img className="cart-container-item__image" src={thumbnail || '/assets/images/products/product1.jpg'} alt="" />
                    </a>
                </div>
                <div className="col-9">
                    <a className="cart-container-item__title" href={`/products/${handle}`}>{title}</a>
                    <div className="cart-container-item__price">{price} р.</div>
                    <div className="cart-container-item__section">
                        <label className="cart-container-item__label">
                            Кол-во: 
                            <input className="cart-container-item__input" type="number" name="count" defaultValue={quantity} readOnly/>
                            
                        </label>
                        <div className="cart-container-item__buttons">
                            <button className="cart-container-item__button" type="button"><i className="fa-solid fa-gear"></i></button>
                            <button className="cart-container-item__button" type="button"><i className="fa-solid fa-trash-can" onClick={removeItem}></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartContainerItem;