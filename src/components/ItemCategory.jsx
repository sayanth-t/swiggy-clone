import {
  Accordion,
  AccordionHeader
} from '@material-tailwind/react';

import { SlArrowDown ,  SlArrowUp } from "react-icons/sl";

import ItemCategoryInfo from './ItemList';
import { useState } from 'react';

const ItemCategory = (props) => {
    const {itemInfo,opened} = props ;
    const {title,itemCards} = itemInfo?.card?.card ;

    const [ open  , setOpen ] = useState(opened) ;

    const handleOpen = (value) => { setOpen( open===value ? 0 : value ) } ;

  return (
    <div >
      <Accordion open = { open=== title } >

        <div className=' bg-white py-5'>
         <AccordionHeader className='border-0 cursor-pointer' onClick={()=> handleOpen(title)}>
          <div className='w-full flex flex-row justify-between items-center '>
            <div>{title} ({itemCards.length})</div>
            <div>{ open===title ? <SlArrowUp/> : <SlArrowDown/> }</div>
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
