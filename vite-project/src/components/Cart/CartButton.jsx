import {useSelector, useDispatch} from 'react-redux'
import { uiActions } from '../../store/UI'

const CartButton = (props) => {

    const total_cart = useSelector((state) => state.cart.cartcount)

    const dispatch = useDispatch();

    const cartVisibiltyHandler = () => {
        dispatch(uiActions.toggle())
    }

  return (
    <button  onClick={cartVisibiltyHandler}>
      <span>My Cart</span>
      <span> : {total_cart}</span>
    </button>
  );
};

export default CartButton;
