import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <header>
      <div>
        <h2>Vicky Stores </h2>
      </div>
      <div className='search_bar'>
        <input
          type='text'
          placeholder='Search the store'
          onChange={handleSearch}
        />
      </div>
      <nav>
        <Link to='/checkout'>
          <button>My Cart </button>
        </Link>
        <button>My Account </button>
      </nav>
    </header>
  )
}

export default Header
