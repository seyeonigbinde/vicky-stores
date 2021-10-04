import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Products from './Products'

const ShoppingList = () => {
  const [products, setProducts] = useState([])
  const [searchProducts, setSearchProducts] = useState('')

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/')
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  const filteredProduct = products.filter((shopping) => {
    return shopping.category
      .toLowerCase()
      .includes(searchProducts.toLowerCase())
  })

  const handleSearch = (e) => {
    setSearchProducts(e.target.value)
  }

  return (
    <section className='product_container'>
      {filteredProduct.map((product) => (
        <Products
          key={product.id}
          product={product}
          handleSearch={handleSearch}
        />
      ))}
    </section>
  )
}

export default ShoppingList
