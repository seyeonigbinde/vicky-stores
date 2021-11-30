import React from "react"
import { Link } from "react-router-dom"
import { Button, Box, Typography } from "@mui/material"
import useStyles from "../css/useStyles"

const ShoppingCart = (props) => {
  const classes = useStyles()
  const total = props.cart.reduce((sum, d) => sum + d.price, 0)
  return (
    <Box className={classes.cart}>
      <Box className={classes.cartHeader}>
        <Typography variant='h4' fontWeight='bold'>
          Shopping Cart
        </Typography>
        <Link to='/' className={classes.buttons}>
          <Button variant='contained'>Continue Shopping</Button>
        </Link>
      </Box>
      <Box className={classes.cartContainer}>
        <Box className={classes.cartItems}>
          {props.cart.map((product) => (
            <Box className={classes.productCard} key={product.id}>
              <Box className={classes.productTitle}>
                <Typography variant='h6'>Item Details</Typography>
                <img
                  src={product.image}
                  alt={product.title}
                  className={classes.productImage}
                />
                <Typography variant='subtitle2'>{product.title}</Typography>
              </Box>
              <Box className={classes.productPrice}>
                <Typography variant='h6'>Price</Typography>
                <Typography variant='subtitle1'>
                  &#8358;{product.price}
                </Typography>
              </Box>
              <Box className={classes.productAction}>
                <Typography variant='h6'>Action</Typography>
                <Button
                  variant='contained'
                  className='product-button'
                  onClick={() => props.removeFromCart(product)}
                >
                  Remove
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
        <Box className={classes.checkoutSection}>
          <Box className={classes.checkoutTitle}>
            <Typography variant='h6' className={classes.checkoutSubTitle}>
              Order Summary
            </Typography>
            <Typography variant='subtitle1'>
              {props.cart.length} items
            </Typography>
          </Box>
          <hr />
          <Box className={classes.checkoutTitle}>
            <Typography variant='h6' className={classes.checkoutSubTitle2}>
              Total
            </Typography>
            <Typography variant='h6'> &#8358;{total}</Typography>
          </Box>
          <hr />
          <Button
            variant='contained'
            className={classes.checkout}
            onClick={() => props.history.push("/checkout")}
          >
            Continue to checkout
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ShoppingCart
