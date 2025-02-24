import {
  Accordion,
  AccordionHeader
  
} from '@material-tailwind/react';


import ItemCategoryInfo from './ItemCategoryInfo';
import { useState } from 'react';

const ItemCategory = (props) => {
    const {itemInfo,opened} = props ;
    const {title,itemCards} = itemInfo?.card?.card ;

    const [ open  , setOpen ] = useState(opened) ;

    const handleOpen = (value) => { setOpen( open===value ? 0 : value ) } ;

  return (
    <div>
      <Accordion open = { open=== title }>
        <AccordionHeader onClick={()=> handleOpen(title)}>{title}</AccordionHeader>
        {itemCards.map((item)=>(
            <ItemCategoryInfo itemInfo={item}/>
        ))}
        
      </Accordion>
    </div>
  );
};

export default ItemCategory;
