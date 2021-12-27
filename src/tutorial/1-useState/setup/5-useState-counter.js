import React, { useState } from 'react';

const UseStateCounter = () => {
   const [value, setValue] = useState(0);

   const decreaseHandler = () => {
      setValue(value - 1);
   };
   const resetHandler = () => {
      setValue(0);
   };
   const increaseHandler = () => {
      setValue(value + 1);
   };

   const complexIncrease = () => {
      setTimeout(() => {
         // setValue(value + 1);
         // “Cuando un estado depende del estado previo”
         // para estos casos a la función que actualiza el estado hay que pasarle una función y el parametro que se le pasa react se asegura de que sea el state previo, y ya en base a este se actualiza el nuevo.
         setValue(prevState => prevState + 1);
      }, 2000);
   };

   return (
      <>
         <section style={{ margin: '4rem 0' }}>
            <h2>regular counter</h2>
            <h1>{value}</h1>
            <button className="btn" onClick={decreaseHandler}>
               Decrease
            </button>
            <button className="btn" onClick={resetHandler}>
               Reset
            </button>
            <button className="btn" onClick={increaseHandler}>
               Increase
            </button>
         </section>
         {/*  */}

         {/*  */}
         <section style={{ margin: '4rem 0' }}>
            <h2>more complex counter</h2>
            <h1>{value}</h1>
            <button className="btn" onClick={complexIncrease}>
               increase later
            </button>
         </section>
      </>
   );
};

export default UseStateCounter;
