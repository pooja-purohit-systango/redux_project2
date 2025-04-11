import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/UI';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button onClick={toggleCartHandler}>
      <span>My Cart : </span>
      <span>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;