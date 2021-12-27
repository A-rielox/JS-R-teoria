import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ name, image, price }) => {
   const url = image && image.url; // si E image => pasa image.url
   const defPrice = "sorry, we still don't have a pice";

   return (
      <article className="product">
         <img src={url || defaultImage} alt={name} />
         <h4>{name}</h4>
         <p>${price || defPrice}</p>
      </article>
   );
};

// para q sean requeridos todos los props q se supone estoy pasando a este componente y me salga en la consola si falta alguno
// 👇 primero el nombre del componente
Product.propTypes = {
   image: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
};

// poniendo props default por si falta alguno
// Product.defaultProps = {
//    name: "sorry we don't have a name yet",
//    price: 'we are working on the price',
//    image: defaultImage,
// };
// como la imagen q se pasa (<img src={image.url} alt={name} />) es un object , entonces por esto no se ve y hay q usar short-circuit

export default Product;

/* 
let asdf = [
   {
      id: 'recmg2a1ctaEJNZhu',
      name: 'utopia sofa',
      image: {
         url: 'https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg',
      },
      price: 39.95,
   },
   {
      ...
   },
   {
      ...
   },
   {
      ...
   },
   { id: 'recNWGyP7kjFhSqw3', name: 'sofa set' },
];
 */
