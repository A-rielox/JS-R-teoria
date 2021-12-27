import React, { useState } from 'react';

const ControlledInputs = () => {
   const [person, setPerson] = useState({ firstName: '', email: '', age: '' });
   const [people, setPeople] = useState([]);

   const handleChange = event => {
      const name = event.target.name; //el "name" del input
      const value = event.target.value; //el "valor" del input (lo ingresado)

      setPerson({ ...person, [name]: value });
      console.log(person);
   };

   const handleSubmit = event => {
      event.preventDefault();

      if (person.firstName && person.email && person.age) {
         const newPerson = { ...person, id: new Date().getTime().toString() };
         // poniendo la persona en el array
         setPeople([...people, newPerson]);
         //reseteando valores
         setPerson({ firstName: '', email: '', age: '' });
      }
   };

   return (
      <>
         <article>
            <form className="form">
               <div className="form-control">
                  <label htmlFor="firstName">Name : </label>
                  <input
                     type="text"
                     id="firstName"
                     name="firstName"
                     value={person.firstName}
                     onChange={handleChange}
                  />
               </div>

               <div className="form-control">
                  <label htmlFor="email">Email : </label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     value={person.email}
                     onChange={handleChange}
                  />
               </div>

               <div className="form-control">
                  <label htmlFor="age">Age : </label>
                  <input
                     type="text"
                     id="age"
                     name="age"
                     value={person.age}
                     onChange={handleChange}
                  />
               </div>

               <button type="submit" onClick={handleSubmit}>
                  add person
               </button>
            </form>
            {people.map((person, index) => {
               const { id, firstName, email, age } = person;

               return (
                  <div className="item" key={id}>
                     <h4>{firstName}</h4>
                     <p>{age}</p>
                     <p>{email}</p>
                  </div>
               );
            })}
         </article>
      </>
   );
};

export default ControlledInputs;
