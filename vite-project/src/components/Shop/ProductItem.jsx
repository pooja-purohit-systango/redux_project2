import { useDispatch } from 'react-redux';
import  { cartActions }  from '../../store/index';
import Card from '../UI/Card';

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, description, id } = props;

  const addToCartHandler = () => {
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
      <Card>
        <header>
          <h3>{title}</h3>
          <div>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;