import React, { useEffect, useState } from "react"
import axios from "axios"
import Header from "./Header"
import images from "../images/shoe_1.jpeg"
import Button from "@mui/material/Button"

const ShoppingList = ({ addToCart, cart }) => {
  const [products, setProducts] = useState([])
  const [searchProducts, setSearchProducts] = useState("")

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
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
    <section>
      <section className='banner'>
        <div className='banner_text'>
          <h1>Feel Your Swag! </h1>
          <p>Number 1. online fashion store in Nigeria.</p>
        </div>
        <figure className='banner_img'>
          <img src={images} alt='banner_image' />
        </figure>
      </section>
      <section>
        <Header handleSearch={handleSearch} cart={cart} />
        <section className='product_container'>
          {filteredProduct.map((product, id) => (
            <div key={id} className='product_items'>
              <img src={product.image} alt='product' />
              <p> {product.title}</p>
              <h5> &#8358;{product.price}</h5>
              <Button onClick={() => addToCart(product)}>Add To Cart</Button>
            </div>
          ))}
        </section>
      </section>
    </section>
  )
}

export default ShoppingList
