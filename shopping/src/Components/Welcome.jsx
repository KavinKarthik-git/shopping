import React, { useState } from 'react'
import data from'../assets/products.json'
import { Product } from './Product'
import  './Welcome.css'
export const Welcome = ({}) => {
    const [products] = useState(data)
  return (
    <div className='p-container'>
        {
            products.map((product) => (
               <div key={product.id}>
               <Product product={product} />
               </div> 
            )
            )
        }
       
       
       </div>
  )
}
