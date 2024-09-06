import React from 'react'
import  './Product.css'
import { useContext } from 'react'
import { nameofcontext } from '../App'
export const Product = ({product}) => {
    const {cart,setCart} = useContext(nameofcontext)
    const addCart = () =>{
      setCart([...cart,product])
    }
    const removeCart = () =>{
        setCart(cart.filter((prod) => product.id !== prod.id))

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
 {cart.includes(product)?<button className='remove' onClick={removeCart}>Remove form Cart</button>:<button className='add'onClick={addCart}>Add to Cart</button>}
 
    </div>        
    </div>
  )
}
