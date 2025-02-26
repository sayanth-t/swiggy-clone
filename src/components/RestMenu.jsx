import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

import useGetRestMenu from '../utils/useGetRestMenu';

import ItemCategory from './ItemCategory';
import { useState } from 'react';

const RestMenu = () => {
  const { restId } = useParams();

  // calling custom hook to fetch data
  const menuData = useGetRestMenu(restId);

  const [ showIndex , setShowIndex ] = useState(0) ;

  if (menuData === null) {
    return <Shimmer />;
  }

  const { name, avgRating, costForTwoMessage, city } =
    menuData?.data?.cards[2]?.card?.card.info;

  // filtering item categories only
  const menuItemCategory =
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards?.filter(
      (item) => {
        return (
          item.card.card['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        );
      }
    );

  // const openedAccordion = menuItemCategory[0]?.card?.card?.title;

  return (
    <div className="p-20 pt-28 restMenu-container">
      <div className="rest-menu flex flex-col items-center">
        <div className="rounded-2xl  p-4 bg-gradient-to-t from-slate-300 to-white">
          <div className="flex justify-baseline sm:min-w-lg md:min-w-lg lg:min-w-3xl border rounded-2xl py-5 pl-5 bg-white border-slate-200">
            <div className="flex flex-col gap-4 ml-3">
              <div className="rest-name-container">
                <div>
                  <h2 className="font-bold text-2xl">{name}</h2>
                </div>
              </div>

              <div className="rest-info-container">
                <div className="rest-info-inner-container">
                  <div>
                    <h4 className="text-slate-500 text-md ">
                      {avgRating} . {costForTwoMessage}{' '}
                    </h4>
                  </div>
                  <div>
                    <h4 className="text-slate-500 text-md ">{city}</h4>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* item categories */}
        <div className="flex justify-center ">
          <div>
            {menuItemCategory.map((item , index ) => (
              <div key={item.card?.id}>
                <ItemCategory showItems = { index === showIndex && true }   changeIndex={( )=>{setShowIndex( index === showIndex ? false : index )}}   itemInfo={item}  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestMenu;
