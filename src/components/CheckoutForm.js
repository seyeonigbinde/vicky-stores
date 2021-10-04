import React, { useState } from 'react'

const initialValue = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  state: '',
  zip: '',
}

const CheckoutForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [values, handleChanges] = useState(initialValue)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccessMessage(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name='firstName'
            value={values.firstName}
            onChange={handleChanges}
            placeholder='First Name'
          />
        </label>
        <label>
          Last Name:
          <input
            name='lastName'
            value={values.lastName}
            onChange={handleChanges}
            placeholder='Last Name'
          />
        </label>
        <label>
          Address:
          <input
            name='address'
            value={values.address}
            onChange={handleChanges}
            placeholder='Address'
          />
        </label>
        <label>
          City:
          <input
            name='city'
            value={values.city}
            onChange={handleChanges}
            placeholder='City'
          />
        </label>
        <label>
          State:
          <input
            name='state'
            value={values.state}
            onChange={handleChanges}
            placeholder='State'
          />
        </label>
        <label>
          Zip:
          <input
            name='zip'
            value={values.zip}
            onChange={handleChanges}
            placeholder='Zip'
          />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className='success-message' data-testid='successMessage'>
          <p>
            You have ordered some plants! Woo-hoo! <span role='img'>🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  )
}

export default CheckoutForm
