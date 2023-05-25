
import CartContainerItem from '../CartContainerItem/CartContainerItem';

const CartContainerContent = ({products}) => {
    const totalPrice = products.reduce((sum, {total}) => sum + parseFloat(total/100), 0);
    return (
        <div className="cart-container__content">
            <div className="cart-container__header">
                <div className="row mx-0">
                    <div className="col-6 px-0">
                        <div className="cart-container__text">
                            <b>{products.length}</b>
                            товаров в корзине
                        </div>
                    </div>
                    <div className="col-6 px-0 text-end">
                        <div className="cart-container__text">Общая сумма:</div>
                        <div className="cart-container__text cart-container__text_bold">{totalPrice} р.</div>
                    </div>
                    <div className="col-12 text-center mt-3">
                        <button className="cart-container__button">
                            Заказать
                        </button>
                    </div>
                </div>
                <div className="cart-container__section">
                    {products.map(item => <CartContainerItem product={item} key={item.id}/>)}
                </div>
                <button className="cart-container__button cart-container__button_gray mt-3">
                    В корзину
                </button>
            </div>
        </div>
    )
}

export default CartContainerContent;