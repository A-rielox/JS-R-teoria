import React, { useState, useEffect } from 'react';

const ShowHide = () => {
   const [show, setShow] = useState(false);

   return (
      <>
         <button className="btn" onClick={() => setShow(!show)}>
            show/hide
         </button>

         {show && <Item />}
      </>
   );
};

// 💥⭐💥 cada vez que muestro el componente se agrega otro eventListener POR ESO hay que poner la cleanup fcn

const Item = () => {
   const [size, setSize] = useState(window.innerWidth);

   const checkSize = () => {
      setSize(window.innerWidth);
   };

   useEffect(() => {
      window.addEventListener('resize', checkSize);

      return () => {
         console.log('limpiando');
         window.removeEventListener('resize', checkSize);
      };
   }, []);

   return (
      <div style={{ margin: '2rem' }}>
         <h1>window</h1>
         <h2>size: {size} px</h2>
      </div>
   );
};

export default ShowHide;
