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
    <Box>
      <Box className={classes.banner}>
        <Box className={classes.bannerText}>
          <Typography variant='h2' fontWeight='bold' color='#fff'>
            Feel Your Swag!
          </Typography>
          <Typography color='#fff'>No. 1 online store in Nigeria.</Typography>
        </Box>
        <Box className={classes.bannerImgContainer}>
          <img src={images} alt='banner_image' className={classes.bannerImg} />
        </Box>
      </Box>
      <Box>
        <Header handleSearch={handleSearch} cart={cart} />
        <Box className={classes.productContainer}>
          {filteredProduct.map((product, id) => (
            <Box key={id} className={classes.productItems}>
              <img
                src={product.image}
                alt='product'
                className={classes.productItemsImg}
              />
              <Typography variant='subtitle2'> {product.title}</Typography>
              <Typography variant='h6'>&#8358;{product.price}</Typography>
              <Button variant='contained' onClick={() => addToCart(product)}>
                Add To Cart
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default ShoppingList
