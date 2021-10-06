import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ handleSearch, cart }) => {
  return (
    <header>
      <div>
        <Link to='/'>
          <h2>Vicky Stores </h2>{' '}
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
          <button>
            My Cart{' '}
            <span className='cart-badge'>{cart.length > 0 && cart.length}</span>
          </button>
        </Link>
        <button>My Account </button>
      </nav>
    </header>
  )
}

export default Header
