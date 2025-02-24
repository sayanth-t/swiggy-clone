import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import RestaurentCard , {withOpenLabel} from './RestCard';
import Shimmer from './Shimmer';
import TopRestCard from './TopRestCard';

// custom hooks
import useGetOnlineStatus from '../utils/useGetOnlineStatus';



// body component
const Body = () => {

  const [ TopRestList , setTopRestList ] = useState([]) ;

  const [restList, setRestList] = useState([]);

  const [filterdRestList, setfilterdRestList] = useState([]);

  const [searchValue, setSearchValue] = useState('');

  const RestOpenLabeled = withOpenLabel(RestaurentCard) ;
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.8744775&lng=75.37036619999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );

    const jsonData = await data.json();

    setRestList(
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilterdRestList(
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setTopRestList(
      jsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    )
  };

  const onlineStatus = useGetOnlineStatus() ;
  if(!onlineStatus){
    return <div className='offline-msg-container'>
      <h2 >You are currently offline..</h2>
    </div>
  }

  // showing restList is loading => CONDETIONAL RENDERING
  if ( restList.length === 0 && TopRestList.length === 0 ) {
    return <Shimmer />;
  }

  console.log('Rest list : ' , restList ) ;

  return (
    <div className="block px-10 py-35 body">
      <div className="py-6 flex items-center space-x-3 search-container">
        <input
          type="text"
          placeholder="Search Restuarents"
          className=" focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow rounded-sm px-4 py-2 input-search"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></input>

        <button
          className="px-3 py-2 bg-gradient-to-l from-blue-200 to-purple-300 rounded-sm  hover:bg-gradient-to-bl  hover:cursor-pointer text-white search-btn"
          onClick={() => {
            const searchRest = restList.filter((rest) =>
              rest.info.name
                .toLowerCase()
                .includes(searchValue.toLowerCase().trim())
            );
            setfilterdRestList(searchRest);
          }}
        >
          Search
        </button>

        <div className="filter-top-rated">
          <button
            className="px-3 py-2 rounded-sm bg-gradient-to-b from-green-100 to to-blue-100 hover:bg-gradient-to-l hover:cursor-pointer filter-btn"
            onClick={() => {
              const restFiltered = restList.filter(
                (rest) => rest.info.avgRating >= 4.5
              );
              setfilterdRestList(restFiltered);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>

      <h2 className='text-xl font-semibold '>Top restaurant chains in Kannur</h2>
      <div className='py-10 top-rest-outer-container' >
        <div className="top-rest-container">
          <div className='flex flex-row space-x-10 top-rest-row'>
            {TopRestList.map((rest) => (
              <TopRestCard key={rest.info.id} restData={rest} />
            ))}
          </div>
        </div>
      </div>
      

      <h2 className='text-xl font-semibold'>Restaurants with online food delivery in Kannur</h2>
      <div className="filter-container">
       
      </div>
      <div className="py-10 flex space-x-15 flex-wrap food-container">
        {filterdRestList.map((rest) => (
          <Link to={`/restaurent-menu/${rest.info.id}`} key={rest.info.id} className='rest-menu-link' >
            { rest.info.isOpen ? <RestOpenLabeled  key={rest.info.id} restData={rest} /> : <RestaurentCard key={rest.info.id} restData={rest} /> }
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
