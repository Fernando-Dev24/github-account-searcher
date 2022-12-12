import { useState } from 'react'

export const useForm = ({ initialState = {} }) => {
   /* states */
   const [values, setValues] = useState(initialState);

   /* functions */
   const handleChange = ({ target }) => {
      setValues({
         ...values,
         [target.name]: target.value,
      });
   };

   const resetHook = () => setValues(initialState);

   return { values, handleChange, resetHook };
};