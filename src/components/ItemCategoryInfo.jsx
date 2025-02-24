
import { AccordionBody } from "@material-tailwind/react";
const ItemCategoryInfo = (props) => {
    const {itemInfo} = props ;
    const {name} = itemInfo?.card?.info ;
    return (
        <div>
            <AccordionBody>{name}</AccordionBody>
        </div>
    );
}

export default ItemCategoryInfo;
