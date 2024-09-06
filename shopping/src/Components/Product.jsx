import React from 'react'
import  './Product.css'
export const Product = ({product,cart,setCart}) => {

    const addCart = () =>{
      setCart([...cart,product])
    }
  return (
    <div className='product-container'>
        <div className='image'>
        <img src = {product.pic}>
        </img>
        </div>
<div className='item'>
<h2>{product.name}</h2>
 <p>{product.amt}</p>
 <button onClick={addCart}>Add to Cart</button>
    </div>        
    </div>
  )
}
