import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/index';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li>
      <header>
        <h3>{title}</h3>
        <div>
          ${total.toFixed(2)}{' '}
          <span>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div>
        <div>
          x <span>{quantity}</span>
        </div>
        <div>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;