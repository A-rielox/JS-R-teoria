import React, { useState, useContext } from 'react';
import { data } from '../../../data';

// Este va a dar acceso a 2 componentes -Context y - Consumer
const PersonContext = React.createContext();
// En el root component va el provider ( se envuelve en:
// <PersonContext.Provider 🐧value="hello">), asi se entrega el context a todos los childs de este components 🔶
// Luego donde se quiere ocupar el "context" ahi se crea una variable para almacenar el contex ( const data = useContext(PersonContext) ), y asi en este caso quedaria almacenado en la variable "data" 💠 , todo lo q se le pase el value🐧

const ContextAPI = () => {
   const [people, setPeople] = useState(data);

   const removePerson = id => {
      setPeople(people => {
         return people.filter(person => person.id !== id);
      });
   };

   /* 🔶 */
   return (
      <PersonContext.Provider value={{ removePerson, people }}>
         <h3>context API</h3>
         <List />
      </PersonContext.Provider>
   );
};

const List = () => {
   const mainData = useContext(PersonContext);

   return (
      <>
         {mainData.people.map(person => {
            return <SinglePerson key={person.id} {...person} />;
         })}
      </>
   );
};

const SinglePerson = ({ id, name }) => {
   const { removePerson } = useContext(PersonContext); /* 💠 */

   return (
      <div className="item">
         <h4>{name}</h4>
         <button onClick={() => removePerson(id)}>remove</button>
      </div>
   );
};

export default ContextAPI;
