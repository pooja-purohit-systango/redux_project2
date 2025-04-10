import {useDispatch, useSelector} from 'react-redux'
import { cartActions } from '../../store';

const CartItem = (props) => {
    const dispatch = useDispatch();
  const { title, quantity, total, price } = props.item;
  const  plusButtonHandler = () => {
    dispatch(cartActions.add_item_to_cart())
    dispatch(cartActions.addtocart())
  }
  const  minusButtonHandler = () => {
    dispatch(cartActions.remove_item_to_cart())
    dispatch(cartActions.removefromcart())
  }

  const item_count = useSelector((state) => state.cart.item_count)

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
          x <span>{item_count}</span>
        </div>
        <div>
          <button  onClick={minusButtonHandler}>-</button>
          <button onClick={plusButtonHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
