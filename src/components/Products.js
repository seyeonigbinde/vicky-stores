import React from 'react'

const Products = ({ id, product, addToCart }) => {
  return (
    <div key={id} className='product_items'>
      <img src={product.image} alt='product' />
      <h5> {product.title}</h5>
      <p> &#8358;{product.price}</p>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  )
}

export default Products
