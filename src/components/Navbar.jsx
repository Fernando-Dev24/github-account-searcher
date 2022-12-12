import React from 'react';
/* assets */
import { FiMoon, FiSun } from 'react-icons/fi';

export const Navbar = ({ isDarkTheme, setIsDarkTheme }) => {
   return (
      <nav className='navbar'>
         <h1>devfinder</h1>
         <button
            className='btn btn-switcher-theme'
            onClick={ () => setIsDarkTheme(!isDarkTheme) }>
            { isDarkTheme ? 'light' : 'dark' }
            { isDarkTheme ?
               <FiSun className='btn-icon' />
               :
               <FiMoon className='btn-icon' />
            }
         </button>
      </nav>
   );
};