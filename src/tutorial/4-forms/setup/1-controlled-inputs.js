import React, { useState } from 'react';

// se ocupa el prop "value" en el input (contiene lo ingresado ) , "state" para sacar el "value" y "onChange" para actualizar el "state" con lo ingresado en el "value"

const ControlledInputs = () => {
   const [firstName, setFirstName] = useState('');
   const [email, setEmail] = useState('');
   const [people, setPeople] = useState([]);

   const submitHandler = event => {
      event.preventDefault();

      if (firstName && email) {
         const person = {
            id: new Date().getTime().toString(),
            firstName,
            email,
         }; //  como la actualiza   💥⭐ 👇 ⭐💥
         setPeople(prevPeople => [...prevPeople, person]);

         //reseteando valores tras guardado
         setFirstName('');
         setEmail('');
      } else {
         console.log('empty values');
      }
   };

   return (
      <>
         <article>
            <form action="" className="form" onSubmit={submitHandler}>
               <div className="form-control">
                  <label htmlFor="firstName">Name : </label>
                  <input
                     type="text"
                     id="firstName"
                     name="firstName"
                     value={firstName}
                     onChange={event => setFirstName(event.target.value)}
                  />
               </div>

               <div className="form-control">
                  <label htmlFor="email">Email : </label>
                  <input
                     type="text"
                     id="email"
                     name="email"
                     value={email}
                     onChange={event => setEmail(event.target.value)}
                  />
               </div>

               <button type="submit">add person</button>
            </form>
            {people.map(person => {
               const { id, firstName, email } = person;

               return (
                  <div className="item" key={id}>
                     <h4>{firstName}</h4>
                     <p>{email}</p>
                  </div>
               );
            })}
         </article>
      </>
   );
};

export default ControlledInputs;
