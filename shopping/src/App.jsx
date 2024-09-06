
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Header } from './Components/Header'
import { Welcome } from './Components/Welcome'
import { Cart } from './Components/Cart'
import { useState,createContext } from 'react';

export const nameofcontext = createContext();

function App() {
  const [cart,setCart] = useState([]);

  return (
<nameofcontext.Provider value={{cart,setCart}}>
      <BrowserRouter>
      <Header cart={cart}/>

      <Routes>
      <Route path="/welcome" element={<Welcome/>}/>
      <Route path="/cart" element={<Cart/>}/>

      </Routes>
      </BrowserRouter>
      
      
</nameofcontext.Provider>
 

      
  )
}

export default App
