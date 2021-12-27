import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
   const [people, setPeople] = useState(data);

   const removeItem = id => {
      setPeople(people.filter(person => person.id !== id));
   };

   return (
      <>
         {people.map(person => {
            const { id, name } = person;

            return (
               <div key={id} className="item">
                  <h4>{name}</h4>

                  <button className="btn" onClick={() => removeItem(id)}>
                     Remover
                  </button>
               </div>
            );
         })}

         <button className="btn" onClick={() => setPeople([])}>
            Borrar Nombres
         </button>
      </>
   );
};

export default UseStateArray;
