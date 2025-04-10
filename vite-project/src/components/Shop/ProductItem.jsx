import Card from '../UI/Card';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/index'

const ProductItem = (props) => {
  const { title, price, description } = props;

  const dispatch = useDispatch();

  const cartHandler = () => {
    dispatch(cartActions.addtocart());
    dispatch(cartActions.add_item_to_cart())
  }

  return (
    <li >
      <Card>
        <header>
          <h3>{title}</h3>
          <div>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div>
          <button onClick={cartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
