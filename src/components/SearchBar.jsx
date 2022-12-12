import React from 'react';
/* hooks */
import { useForm } from '../hook';
/* assets */
import { FiSearch } from 'react-icons/fi';

export const SearchBar = () => {
   /* hooks */
   const { values, handleChange } = useForm({ username: '' });
   const { username } = values;

   return (
      <form className='form' autoComplete='off'>
         <article className='input-field'>
            <FiSearch className='input-icon' />
            <input
               type="text"
               name='username'
               placeholder='Search GitHub username...'
               value={ username }
               onChange={ handleChange }
            />
            <button className='btn btn-submit'>Search</button>
         </article>
      </form>
   );
};