import React from 'react'

const Products = ({ id, product, handleSearch }) => {
  return (
    <div key={id} className='product_items'>
      <img src={product.image} alt='product' />
      <h5> {product.title}</h5>
      <p> &#8358;{product.price}</p>
      <button>Add To Cart</button>
    </div>
  )
}

export default Products
