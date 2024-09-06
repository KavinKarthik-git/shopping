import React, { useEffect, useState } from 'react'
import './Cart.css'
export const Cart = ({cart,setCart}) => {

    const [total,setTotal] = useState([])
    useEffect(() => 
        {setTotal(cart.reduce((acc,cu) => acc+parseInt(cu.amt),0))},[cart])
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
            </div>
            </div>
        ))}
       


        <h1 className='total'>Total amount: ${total}</h1>
       </div>
        
       
</>
    
  )
}
