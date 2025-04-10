import Card from '../UI/Card';
import CartItem from './CartUtem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const item_count = useSelector((state) => state.cart.item_count); 
  const showCart = useSelector((state) => state.ui.isCartVisible);

  return (
    <>
      {showCart && (
        <Card>
          <h2>Your Shopping Cart</h2>
          <ul>
            <CartItem
              item={{
                title: 'Test Item',
                quantity: item_count,
                total: 6 * item_count,
                price: 6,
              }}
            />
          </ul>
        </Card>
      )}
    </>
  );
};

export default Cart;
