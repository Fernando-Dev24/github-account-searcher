import React from 'react';
/* assets */
import { MdLocationOn } from 'react-icons/md'
import { FiTwitter, FiLink, FiBriefcase } from 'react-icons/fi';

export const AccountInfo = () => {
   return (
      <section className='account-info-wrapper'>
         <figure className='account-image'>
            <img
               src="https://picsum.photos/200"
               alt="User Image"
            />
         </figure>
         <article className='account-data'>
            <header className='account-header'>
               <div className='username-wrapper'>
                  <h3>The Octocat</h3>
                  <p>Joined 25 Jan, 2011</p>
               </div>
               <p className='usertag'>@octocat</p>
            </header>
            <p className='bio'>This profile has no bio</p>
            <article className="profile-stats">
               <div className="stat">
                  <p>Repos</p>
                  <p>8</p>
               </div>
               <div className="stat">
                  <p>Followers</p>
                  <p>3938</p>
               </div>
               <div className="stat">
                  <p>Following</p>
                  <p>9</p>
               </div>
            </article>
            <article className="social-media">
               <div className='link'>
                  <MdLocationOn />
                  San Francisco
               </div>
               <div className='link'>
                  <FiTwitter />
                  Not Available
               </div>
               <div className='link'>
                  <FiLink />
                  <a href="https://github.blog">https://github.blog</a>
               </div>
               <div className='link'>
                  <FiBriefcase />
                  @github
               </div>
            </article>
         </article>
      </section>
   );
};