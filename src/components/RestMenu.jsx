
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

import useGetRestMenu from '../utils/useGetRestMenu';

import ItemCategory from './ItemCategory';

const RestMenu = () => {
  
  const {restId} = useParams() ;

  // calling custom hook to fetch data
  const menuData = useGetRestMenu(restId) ;

  console.log(menuData) ;
  
  if ( menuData === null ) {
    return <Shimmer />;
  } 

  const { name, avgRating, costForTwoMessage, city } =
    menuData?.data?.cards[2]?.card?.card.info;


  // filtering item categories only
  const menuItemCategory = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards?.filter((item)=>{
    return  item.card.card["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' 
  })

  const openedAccordion =  menuItemCategory[0]?.card?.card?.title ;

  console.log(typeof (menuItemCategory) )

  return (
    <div className="restMenu-container">
      <div className="rest-menu">
        <div className="rest-name-container">
          <div>
            <h2>{name}</h2>
          </div>
        </div>

        <div className="rest-info-container">
          <div className="rest-info-inner-container">
            <div>
              <h4>
                {avgRating} . {costForTwoMessage}{' '}
              </h4>
            </div>
            <div>
              <h4>{city}</h4>
            </div>
            <div></div>
          </div>
        </div>

       {/* item categories */}
       <div>
        {menuItemCategory.map((item)=>(
          <div key={item.card?.title}>
            <ItemCategory opened={openedAccordion} itemInfo={item} />
          </div>
        ))}
       </div>
      </div>
    </div>
  );
};

export default RestMenu;
