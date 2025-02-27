import { CLOUDINARY_URL } from "../utils/constants";

import { removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({cartItem}) => {
    const {name,imageId,description,ratings,price,id} = cartItem ;

    const dispatch = useDispatch() ;

    console.log('cart Item -' , cartItem )

    return ( 
        <div>
            <div className='flex flex-row justify-between items-center border-b pb-5 border-b-slate-300'>
                      <div className='flex flex-col gap-2'>
                        <h2 className='font-bold text-xl'>{name}</h2>
                        <p>₹ {price / 100}</p>
                        <p className='lg:max-w-2xl'>{description}</p>
            
            
                      </div>
                      <div className='relative rounded-2xl w-36 h-36 '>
                       
                          <img className='w-full h-full object-cover rounded-2xl' src={CLOUDINARY_URL+imageId} alt="" />  
                          <button  onClick={()=> dispatch(removeItem(id)) } className='text-red-500 font-bold border px-5 py-2 border-slate-300 bg-white rounded-2xl hover:cursor-pointer hover:bg-slate-100 absolute translate-x-[20%] translate-y-[-70%]'>REMOVE</button>
                        
                      </div>
                    </div>
        </div>
    );
}

export default CartItem;
