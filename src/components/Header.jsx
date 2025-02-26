import { useState , useContext } from 'react';
import { LOGO_URL } from '../utils/constants';

import { Link } from 'react-router-dom';

import UserContext from '../utils/userContext';

// import custom hooks
import useGetOnlineStatus from '../utils/useGetOnlineStatus';

// header component
const Header = () => {
  const [btnName, setBtnName] = useState('login');

  const onlineStatus = useGetOnlineStatus() ;
  
  const { loggedUser } = useContext(UserContext) ;
  console.log('User Context --- ' , loggedUser )
  
 

  return (
    <div className= "w-full fixed z-1000 bg-slate-50 px-30 py-5 shadow-lg items-center" >
      <div className=' flex flex-row justify-between items-center nav-container '>

      <div className="w-15 logo-container">
        <img className="logo" src={LOGO_URL} alt="LOGO" />
      </div> 

      <div className="nav-items-container">
        <ul className="flex flex-row space-x-5 nav-items ">
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/grocery'}>Grocery</Link>
          </li>
          <li>
            <Link to={'/cart'}>Cart</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
          <li>
            <Link to={'/profile'}>Profile</Link>
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
