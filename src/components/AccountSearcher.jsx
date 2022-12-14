import React, { useState } from 'react';
/* components */
import { Navbar, SearchBar, AccountInfo } from './';

export const AccountSearcher = () => {
   /* states */
   const [isDarkTheme, setIsDarkTheme] = useState(true);
   
   return (
      <section className='container container-wrapper'>
         <Navbar
            isDarkTheme={ isDarkTheme }
            setIsDarkTheme={ setIsDarkTheme }
         />
         <SearchBar />
         <AccountInfo />
      </section>
   );
};