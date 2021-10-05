import React from 'react'
import Header from './Header'
import images from '../images/shoe_1.jpeg'
import ShoppingList from './ShoppingList'
import Footer from './Footer'

const Homepage = ({ addToCart, cart }) => {
  return (
    <section>
      <Header />
      <section className='banner'>
        <div>
          <h1>Feel Your Swag! </h1>
        </div>
        <figure className='banner_img'>
          <img src={images} alt='banner_image' />
        </figure>
      </section>
      <ShoppingList addToCart={addToCart} cart={cart} />
      <Footer />
    </section>
  )
}

export default Homepage
