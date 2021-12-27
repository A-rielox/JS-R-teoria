import React, { useState } from 'react';

const UseStateObject = () => {
   const [person, setPerson] = useState({
      name: 'peter',
      age: 23,
      message: 'random message',
   });

   const changeMessageHandler = () => {
      // setPerson({
      //    name: person.name,
      //    age: person.age,
      //    message: 'otro mensaje',
      // });

      setPerson({ ...person, message: 'otro mensaje' });
   };

   return (
      <>
         <h3>{person.name}</h3>
         <h3>{person.age}</h3>
         <h3>{person.message}</h3>

         <button className="btn" onClick={changeMessageHandler}>
            cambiar mensage
         </button>
      </>
   );
};

export default UseStateObject;
