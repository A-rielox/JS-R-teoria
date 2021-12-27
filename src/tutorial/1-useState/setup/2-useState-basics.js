import React, { useState } from 'react';

const UseStateBasics = () => {
   const [text, setText] = useState('original');

   const clickHandler = () => {
      if (text === 'original') {
         setText('hola hola');
      } else {
         setText('original');
      }
   };

   return (
      <React.Fragment>
         <h2>{text}</h2>
         <button type="button" className="btn" onClick={clickHandler}>
            Cambiar titulo
         </button>
      </React.Fragment>
   );
};

export default UseStateBasics;
