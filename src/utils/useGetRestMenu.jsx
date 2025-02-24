import { useEffect, useState } from 'react';

import { MENU_API } from './constants';

const useGetRestMenu = (restId) => {
  const [menuData, setMenuData] = useState(null);

  const findMenu = async (restId) => {
    const data = await fetch(MENU_API + restId);
    const menuData = await data.json();

    setMenuData(menuData);
  };

  useEffect(() => {
    findMenu(restId);
  }, [] );

  return menuData;
};

export default useGetRestMenu;
