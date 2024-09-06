
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Header } from './Components/Header'
import { Welcome } from './Components/Welcome'
import { Cart } from './Components/Cart'
import { useState } from 'react'

function App() {
  const [cart,setCart] = useState([]);

  return (
<>
      <BrowserRouter>
      <Header/>

      <Routes>
      <Route path="/welcome" element={<Welcome  cart={cart} setCart={setCart}/>}/>
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>

      </Routes>
      </BrowserRouter>
      
      
</>
 

      
  )
}

export default App
