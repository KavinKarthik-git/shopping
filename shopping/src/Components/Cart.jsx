import React, { useEffect, useState } from 'react'
import './Cart.css'
import { useContext } from 'react'
import { nameofcontext } from '../App'
    
export const Cart = () => {
    const {cart,setCart} = useContext(nameofcontext)
    const [total,setTotal] = useState([])
    useEffect(() => 
        {setTotal(cart.reduce((acc,cu) => acc+parseInt(cu.amt),0))},[cart]);
    const remove =(id) =>{
        setCart(cart.filter((prod) => prod.id !== id))
    }

  return (
<>
<h1 className='heading'>Cart List</h1>
    <div className='cart-container'>     
       {
        cart.map((prod) =>(
            <div className='cart-each'>
            <img src={prod.pic}></img>
            <div className='details'>
            <h2>{prod.name}</h2>
            <p>${prod.amt}</p>
            <button onClick={() => remove(prod.id)}>Remove</button>
            </div>
            </div>
        ))}

        <h1 className='total'>Total amount: ${total}</h1>
       </div>
        
       
</>
    
  )
}
