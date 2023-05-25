
import CartContainerContent from '../CartContainerContent/CartContainerContent';
import './cart-container.scss';



const CartContainer = ({ products, isMenuOpen }) => {
    const emptyCartClasses = !products.length ? "cart-container_flex" : '';
    
    return (
        <div className={`cart-container ${isMenuOpen ? 'active' : 0} ${emptyCartClasses}`}>
            {!products.length && <div className="cart-container__message">Корзина пуста</div>}
            {products.length && <CartContainerContent products={products} />}
        </div>
    )
}

export default CartContainer;