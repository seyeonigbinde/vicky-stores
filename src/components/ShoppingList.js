import React, { useEffect, useState } from "react"
import axios from "axios"
import Header from "./Header"
import images from "../images/shoe_1.jpeg"
import { Button, Typography, Box } from "@mui/material"
import useStyles from "../css/useStyles"

const ShoppingList = ({ addToCart, cart }) => {
  const [products, setProducts] = useState([])
  const [searchProducts, setSearchProducts] = useState("")

  const classes = useStyles()

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
          <Typography>Number 1. online fashion store in Nigeria.</Typography>
        </div>
        <figure className='banner_img'>
          <img src={images} alt='banner_image' />
        </figure>
      </section>
      <section>
        <Header handleSearch={handleSearch} cart={cart} />
        <Box className={classes.productContainer}>
          {filteredProduct.map((product, id) => (
            <div key={id} className='product_items'>
              <img src={product.image} alt='product' />
              <Typography> {product.title}</Typography>
              <h5> &#8358;{product.price}</h5>
              <Button variant='contained' onClick={() => addToCart(product)}>
                Add To Cart
              </Button>
            </div>
          ))}
        </Box>
      </section>
    </section>
  )
}

export default ShoppingList
