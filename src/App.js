import React, { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import { Switch, Route } from 'react-router-dom'
import CheckoutForm from './components/CheckoutForm'
import ShoppingCart from './components/ShoppingCart'
import Header from './components/Header'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (plant) => {
    setCart([...cart, plant])
  }

  const removeFromCart = (product) => {
    setCart(cart.filter((p) => p.id !== product.id))
  }
  return (
    <div className='App'>
      <Header cart={cart} />
      <Route
        path='/cart'
        render={(props) => (
          <ShoppingCart
            {...props}
            cart={cart}
            removeFromCart={removeFromCart}
          />
        )}
      />
      <Route path='/checkout'>
        <CheckoutForm />
      </Route>
      <Route path='/'>
        <Homepage cart={cart} addToCart={addToCart} />
      </Route>
    </div>
  )
}

export default App
