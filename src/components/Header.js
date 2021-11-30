import React from "react"
import { Link } from "react-router-dom"
import { Button, Box, Typography, TextField } from "@mui/material"
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded"
import useStyles from "../css/useStyles"

const Header = ({ handleSearch, cart }) => {
  const classes = useStyles()
  return (
    <Box className={classes.header}>
      <Box>
        <Link to='/' className={classes.headerLinks}>
          <Typography variant='h3' fontWeight='bold'>
            Vicky Stores
          </Typography>
        </Link>
      </Box>
      <Box className={classes.searchbar}>
        <TextField
          type='text'
          placeholder='Search by category'
          onChange={handleSearch}
          className={classes.textfield}
        />
      </Box>
      <Box className={classes.navbar}>
        <Link to='/cart' className={classes.buttons}>
          <Button variant='contained' startIcon={<ShoppingCartRounded />}>
            My Cart
            <span className={classes.cartBadge}>
              {cart.length > 0 && cart.length}
            </span>
          </Button>
        </Link>
        <Button variant='contained'>My Account </Button>
      </Box>
    </Box>
  )
}

export default Header
