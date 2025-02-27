import { AccordionBody } from '@material-tailwind/react';
import { CLOUDINARY_URL } from '../utils/constants';

// import context 
// import UserContext from '../utils/userContext';

// import useDispatch
import { useDispatch } from 'react-redux';

// import add Item action
import { addItem } from '../utils/cartSlice';

const ItemCategoryInfo = (props) => {
  const { itemInfo } = props;
  const { name, price, description , imageId } = itemInfo?.card?.info;

  const dispatch = useDispatch() ;

  const handleAddItem = () => {
    dispatch(addItem(itemInfo?.card?.info))
  }  
  
  return (
    <div>
      <AccordionBody>
        <div className='flex flex-row justify-between items-center border-b pb-5 border-b-slate-300'>
          <div className='flex flex-col gap-2'>
            <h2 className='font-bold text-xl'>{name}</h2>
            <p>₹ {price / 100}</p>
            <p className='lg:max-w-2xl'>{description}</p>

            {/* older way to access context */}
            {/* <div>
              <UserContext.Consumer>
                { (data) => {console.log('context Data - ' , data )}}
              </UserContext.Consumer>
            </div> */}

          </div>
          <div className='relative rounded-2xl w-36 h-36 '>
           
              <img className='w-full h-full object-cover rounded-2xl' src={CLOUDINARY_URL+imageId} alt="" />  
              <button onClick={handleAddItem} className='text-green-600 font-bold border px-5 py-2 border-slate-300 bg-white rounded-2xl hover:cursor-pointer hover:bg-slate-100 absolute translate-x-[45%] translate-y-[-70%]'>ADD</button>
            
          </div>
        </div>
      </AccordionBody>
    </div>
  );
};

export default ItemCategoryInfo;
