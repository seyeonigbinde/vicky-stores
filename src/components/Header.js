import React, { useState } from 'react'

const Header = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <nav>
      <div>
        <h1>Vicky Stores </h1>
      </div>
      <div>
        <input
          type='text'
          placeholder='Search the store'
          onChange={handleSearch}
        />
      </div>
      <div>
        <button>My Cart </button>
        <button>My Account </button>
      </div>
    </nav>
  )
}

export default Header
