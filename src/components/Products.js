import React from 'react'

const Products = ({ id, product, handleSearch }) => {
  return (
    <section key={id} className='product_container'>
      <div className='product_items'>
        <img src={product.image} alt='product' />
        <h5> {product.title}</h5>
        <p> &#8358;{product.price}</p>
      </div>
    </section>
  )
}

export default Products
