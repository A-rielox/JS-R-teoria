import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
   const refContainer = useRef(null);

   const handleSubmit = event => {
      event.preventDefault();

      console.log(refContainer.current.value);
   };

   // es útil pa q al cargar el componente se ponga el focus en el elementom no se necesita ponerle dependencias
   useEffect(() => {
      refContainer.current.focus();
   });

   return (
      <>
         <form className="form" onSubmit={handleSubmit}>
            <div>
               <input type="text" ref={refContainer} />
               <button type="submit">submit</button>
            </div>
         </form>
      </>
   );
};

export default UseRefBasics;

/*
Apunta al html element ( DOM node )
console.log(refContainer.current);
<input type="text">

apunta al valor del html element ( DOM node )
console.log(refContainer.current.value);
el valor del input

*/
