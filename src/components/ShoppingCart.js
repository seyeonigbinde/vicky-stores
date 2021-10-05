import React from 'react'

const ShoppingCart = (props) => {
  const total = props.cart.reduce((sum, d) => sum + d.price, 0)
  return (
    <div className='cart'>
      {props.cart.map((product) => (
        <div className='product-card' key={product.id}>
          <img
            className='product-image'
            src={product.image}
            alt={product.title}
          />
          <div className='product-details'>
            <h2 className='product-name'>{product.title}</h2>
            <p> &#8358;{product.price}</p>
            <button
              className='product-button'
              onClick={() => props.removeFromCart(product)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className='checkout-section'>
        <p className='total'>Total: &#8358;{total}</p>
        <button
          className='checkout'
          onClick={() => props.history.push('/checkout')}
        >
          Checkout
        </button>
      </div>
    </div>
  )
}

export default ShoppingCart
