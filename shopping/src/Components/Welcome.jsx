import React, { useState } from 'react'
import data from'../assets/products.json'
import { Product } from './Product'
import  './Welcome.css'
export const Welcome = ({cart,setCart}) => {
    const [products] = useState(data)
  return (
    <div className='p-container'>
        {
            products.map((product) => (
               <div key={product.id}>
               <Product product={product} cart={cart} setCart={setCart}/>
               </div> 
            )
            )
        }
       
       
       </div>
  )
}
