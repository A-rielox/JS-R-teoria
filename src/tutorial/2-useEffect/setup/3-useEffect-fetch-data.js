import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
   const [users, setUsers] = useState([]);

   const getUsers = async () => {
      const response = await fetch(url);
      const users = await response.json(); // 🔰
      setUsers(users);
   };

   // ⭐
   useEffect(() => {
      getUsers();
   }, []);
   // si no pongo la dependencia para q se ejecute una sola vez => se hace el loop infinito

   return (
      <>
         <h3>github users</h3>
         <ul className="users">
            {users.map(user => {
               const { id, login, avatar_url, html_url } = user;

               return (
                  <li key={id}>
                     <img src={avatar_url} alt={login} />
                     <div>
                        <h4>{login}</h4>
                        <a href={html_url}>profile</a>
                     </div>
                  </li>
               );
            })}
         </ul>
      </>
   );
};

export default UseEffectFetchData;

// 🔰
// toma la respuesta en formato json y la transforma a formato javascript

// ⭐
// LA FCN DEL USEEFFECT NO PUEDE SER ASYNC, XESO SE HACE UNA FCN APARTE Y ESA SE HACE ASYNC ( la fcn q retorna el useEffect es la "cleanup" y una async devuelve una promesa, por eso no se puede poner async, ya q useEffect espera q la retornada sea la cleanup )
//
//la fcn de adentro del useEffect si puede ser async, pero no se puede:
// useEffect ( async () => {})
