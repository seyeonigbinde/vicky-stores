import React from 'react'
import { Link } from 'react-router-dom'

const ShoppingCart = (props) => {
  const total = props.cart.reduce((sum, d) => sum + d.price, 0)
  return (
    <section className='cart'>
      <div className='cart_header'>
        <h2> Shopping Cart</h2>
        <Link to='/'>
          <button> Continue Shopping</button>
        </Link>
      </div>
      <section className='cart_container'>
        <div className='cart_items'>
          {props.cart.map((product) => (
            <div className='product-card' key={product.id}>
              <div className='product_title'>
                <p>Item Details</p>
                <img src={product.image} alt={product.title} />
                <h5>{product.title}</h5>
              </div>
              <div className='product_price'>
                <p>Price</p>
                <p> &#8358;{product.price}</p>
              </div>
              <div className='product_action'>
                <p>Action</p>
                <button
                  className='product-button'
                  onClick={() => props.removeFromCart(product)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='checkout-section'>
          <div className='checkout_title'>
            <h5> Order Summary</h5>
            <p>{props.cart.length} items</p>
          </div>
          <hr />
          <div className='checkout_title'>
            <h5>Total</h5>
            <p> &#8358;{total}</p>
          </div>
          <hr />
          <button
            className='checkout'
            onClick={() => props.history.push('/checkout')}
          >
            Continue to checkout
          </button>
        </div>
      </section>
    </section>
  )
}

export default ShoppingCart
