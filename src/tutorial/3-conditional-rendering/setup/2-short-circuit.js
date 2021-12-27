import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
   const [text, setText] = useState('');
   const [isError, setIsError] = useState(false);

   const toggleError = () => {
      setIsError(!isError);
   };

   return (
      <>
         {/* si no hay usuario => devuelve el default */}
         <h1>{text || 'john doe'}</h1>
         {/*si E el text => devuelve lo sig (pa mostrar y esconder partes)*/}

         <button className="btn" onClick={toggleError}>
            toggle error
         </button>
         {isError && <h1>Error...</h1>}
         {isError ? <p>There is an error</p> : <p>No error found</p>}
      </>
   );
};

export default ShortCircuit;

/* 
   const firstValue = text || 'hello world';
   const secondValue = text && 'hello world';

return (
   <>
      <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1>
   </>
);

// 'hello world'
// value:
 */

// x || y : se ejecuta y <=> x es F
//          si x es V => ejecuta x

// x && y : y se ejecuta <=> x es V
//          si x es F => se ejecuta x

// se ocupa el short-circuit porque dentro del return no se puede poner
// un { if( ) { } }
