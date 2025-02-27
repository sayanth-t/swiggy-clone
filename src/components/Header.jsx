import { useState , useContext } from 'react';
import { IoMdCart , IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { LOGO_URL } from '../utils/constants';

import { Link } from 'react-router-dom';

import UserContext from '../utils/userContext';

// import custom hooks
import useGetOnlineStatus from '../utils/useGetOnlineStatus';

// importing useSelector for subcscribing cart store
import { useSelector } from 'react-redux';


// header component
const Header = () => {
  const [btnName, setBtnName] = useState('login');

  const onlineStatus = useGetOnlineStatus() ;
  
  const { loggedUser } = useContext(UserContext) ;
  console.log('User Context --- ' , loggedUser )
  
  // subscribing cart store
  const cartItems = useSelector((store) => store.cart.items )  ;

  return (
    <div className= "w-full fixed z-1000 bg-slate-50 px-30 py-5 shadow-lg items-center" >
      <div className=' flex flex-row justify-between items-center nav-container '>

      <div className="w-15 logo-container">
        <img className="logo" src={LOGO_URL} alt="LOGO" />
      </div> 

      <div className="nav-items-container">
        <ul className="flex flex-row items-center space-x-5 nav-items ">
          <li>
            <Link to={'/'}><IoMdHome className='text-2xl' /></Link>
          </li>
          
          <li>
            <Link to={'/cart'}><IoMdCart className='text-2xl' /></Link>
            <div className='absolute top-6 right-[23.4%] text-red-500'>{cartItems.length}</div>
          </li>
         
        
          <li>
            <Link to={'/profile'}><CgProfile className='text-2xl'  /></Link>
          </li>
          <li>
            Online Status { onlineStatus ? '🟢' : '🔴'}
          </li>
          <li>
            {loggedUser}
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === 'login' ? setBtnName('logout') : setBtnName('login');
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>

      </div>
    </div>
  );
};

export default Header;
