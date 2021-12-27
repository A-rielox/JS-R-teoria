import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';

// useParams es lo q paso dinamicamente por el url, en este caso se pasa con el nombre de 'id' ( en index.js ) ( <Route path="/person/:id" children={<Person />}></Route> ), y es el id de la persona lo que se pasa, se define en People.js ( <Link to={`/person/${person.id}`}>Learn More</Link> )

const Person = () => {
   // console.log(useParams()); // {id: '2'}
   const [name, setName] = useState('default name');
   const { id } = useParams();

   useEffect(() => {
      const newPerson = data.find(person => person.id === parseInt(id));
      setName(newPerson.name);
   }, []);

   return (
      <div>
         <h1>{name}</h1>
         <Link to="/people" className="btn">
            Back to People
         </Link>
      </div>
   );
};

export default Person;
