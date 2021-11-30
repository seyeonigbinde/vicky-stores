import React from "react"
import { Link } from "react-router-dom"
import Button from "@mui/material/Button"
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded"

const Header = ({ handleSearch, cart }) => {
  return (
    <header>
      <div>
        <Link to='/'>
          <h2>Vicky Stores </h2>{" "}
        </Link>
      </div>
      <div className='search_bar'>
        <input
          type='text'
          placeholder='Search the store'
          onChange={handleSearch}
        />
      </div>
      <nav>
        <Link to='/cart'>
          <Button variant='contained' startIcon={<ShoppingCartRounded />}>
            My Cart
            <span className='cart-badge'>{cart.length > 0 && cart.length}</span>
          </Button>
        </Link>
        <Button variant='contained'>My Account </Button>
      </nav>
    </header>
  )
}

export default Header
