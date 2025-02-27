import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin6Line } from "react-icons/ri";
import CartItem from './CartItem';

import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch() ;

  return (
    <div>
      <div className="flex justify-center items-center pt-36">
        <div className="flex flex-col lg:max-w-4xl">
          <div className='flex flex-row justify-between items-center mb-7'>

            <div>
              <h2 className="text-2xl font-bold">Cart Itmes</h2>
            </div>
            <div>

              { cartItems.length !== 0  && <button onClick={()=>dispatch(clearCart())} className='text-2xl hover:cursor-pointer '><RiDeleteBin6Line /></button> }
              
            </div>

          </div>
          { cartItems.length !== 0 ? cartItems.map((item) => (
            <div key={item.id}>
              <CartItem cartItem={item} />
            </div>
          )) : <div>Cart is Empty !</div> }
       
        </div>
      </div>
    </div>
  );
};

export default Cart;
