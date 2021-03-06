import React, { useState, useEffect } from 'react';
import { useFetch } from './2-useFetch';

const url = 'https://course-api.com/javascript-store-products';

const Example = () => {
   const { loading, products } = useFetch(url);

   console.log(products);
   return (
      <div>
         <h2>{loading ? 'loading...' : 'data'}</h2>
      </div>
   );
};

export default Example;

/* 
let examplelist = [
   {
      id: 'rec43w3ipXvP28vog',
      fields: {
         company: 'ikea',
         colors: ['#f15025', '#222'],
         featured: true,
         price: 999,
         name: 'high-back bench',
         image: [
            {
               id: 'attcvDDMikF6G2iNi',
               url: 'https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg',
               filename: 'product-1.jpeg',
               size: 62864,
               type: 'image/jpeg',
               thumbnails: {
                  small: {
                     url: 'https://dl.airtable.com/.attachmentThumbnails/c6c5c0d7a0b2abe7494acbcf112df4f1/14292088',
                     width: 56,
                     height: 36,
                  },
                  large: {
                     url: 'https://dl.airtable.com/.attachmentThumbnails/d86e13eec1b200e2b21282b99a9382be/6d92321b',
                     width: 801,
                     height: 512,
                  },
                  full: {
                     url: 'https://dl.airtable.com/.attachmentThumbnails/1135c89c18e3edcdc125a8f94e462d6a/c8e40bb6',
                     width: 3000,
                     height: 3000,
                  },
               },
            },
         ],
      },
   },
];
 */
