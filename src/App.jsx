import React from 'react';
import WebFont from 'webfontloader';
/* components */
import { AccountSearcher } from './components';

export const App = () => {
   WebFont.load({
      google: {
         families: ["IBM Plex Mono:500,600", "Outfit:300,400,500,600"],
      },
   });

   return (
      <main className='main-wrapper'>
         <AccountSearcher />
      </main>
   );
};