import React, { useState } from "react"
import "./App.css"
import { Route, Switch } from "react-router-dom"
import CheckoutForm from "./components/CheckoutForm"
import ShoppingCart from "./components/ShoppingCart"
import Footer from "./components/Footer"
import ShoppingList from "./components/ShoppingList"
import Header from "./components/Header"

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (product) => {
    setCart(cart.filter((p) => p.id !== product.id))
  }
  return (
    <div className='App'>
      <Header cart={cart} />
      <Switch>
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
          <ShoppingList cart={cart} addToCart={addToCart} />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
