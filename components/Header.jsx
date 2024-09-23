import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { LoGO_URL } from '../utils/constant';
import { FaLocationDot } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';
import { BiSolidOffer, BiSolidLogInCircle } from 'react-icons/bi';
import { IoFootballSharp } from 'react-icons/io5';
import { FaCartPlus } from 'react-icons/fa';
import Location from '../components/Location';
import { Badge, IconButton } from '@mui/material'; 
import Logo from '../components/Logo.png';

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  const [btnName, setBtnName] = useState(loggedInUser ? 'Logout' : 'Login');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setBtnName(btnName === 'Login' ? 'Logout' : 'Login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className='flex justify-between items-center w-[92%] mx-auto '>
        <div className="flex items-center w-full md:w-auto justify-between">
          <div className=''>
            <img 
              className='hover:scale-110 transition-transform'
              src={Logo} 
              alt="Logo" 
              style={{ width: '160px', height: '105px' }} 
            />
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-lg">
              {isMenuOpen ? '✖' : '☰'} {/* Hamburger Icon */}
            </button>
          </div>
        </div>
        <div className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row items-center bg-white md:bg-transparent p-5 md:p-0 w-full`}>
          <ul className="flex flex-col md:flex-row md:items-center md:gap-8 w-full justify-between">
            <li className="flex-grow text-center">
              <Link to="" className="flex items-center hover:text-gray-400 text-lg font-bold">
                <FaLocationDot className="mr-2" />
                <Location />
              </Link>
            </li>
            <li className="flex-grow text-center">
              <Link to="/" className="flex items-center hover:text-gray-400 text-lg font-bold">
                <FaHome className="mr-2" />
                <span>Home</span>
              </Link>
            </li>
            <li className="flex-grow text-center">
              <Link to="/Offers" className="flex items-center hover:text-gray-400 text-lg font-bold">
                <BiSolidOffer className="mr-2" />
                <span>Offers</span>
              </Link>
            </li>
            <li className="flex-grow text-center">
              <Link to="/AboutMe" className="flex items-center hover:text-gray-400 text-lg font-bold">
                <IoFootballSharp className="mr-2" />
                <span>ABOUT ME</span>
              </Link>
            </li>
            <li className="flex-grow text-center">
              <Link  to="/LoginRegister">
              <button onClick={handleButtonClick} className="flex items-center hover:text-gray-400 text-lg font-bold">
                <BiSolidLogInCircle className="mr-2" />
                {btnName}
              </button>
              </Link>
            </li>
            <li className="flex-grow text-center">
              <Link to="/Cart" className="flex items-center hover:text-gray-400 text-lg font-bold">
                <IconButton aria-label="cart">
                  <Badge badgeContent={cartItems.length} color="secondary">
                    <FaCartPlus />
                  </Badge>
                </IconButton>
                <span className='text-black ml-2'>Cart</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;