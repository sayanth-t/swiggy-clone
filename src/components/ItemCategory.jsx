import {
  Accordion,
  AccordionHeader
} from '@material-tailwind/react';

import { SlArrowDown ,  SlArrowUp } from "react-icons/sl";

import ItemCategoryInfo from './ItemList';


const ItemCategory = ( { itemInfo , showItems , changeIndex  } ) => {
  
  
    const {title,itemCards} = itemInfo?.card?.card ;

    const handleClick = () => {
      changeIndex()
    }

  return (
    <div >
      <Accordion open = { showItems  } >

        <div className=' bg-white py-5'>
         <AccordionHeader className='border-0 cursor-pointer' onClick={handleClick} >
          <div className='w-full flex flex-row justify-between items-center '>
            <div>{title} ({itemCards.length})</div>
            <div>{ open===showItems ? <SlArrowUp/> : <SlArrowDown/> }</div>
          </div>
         </AccordionHeader>
        </div>
        {itemCards.map((item)=>(
            <div key={item.id}> 
              <ItemCategoryInfo itemInfo={item}/>
            </div>
        ))}
        
      </Accordion>
      <div className='bg-gray-100 w-full h-3 '></div>
    </div>
  );
};

export default ItemCategory;
