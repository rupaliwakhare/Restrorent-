import React from 'react'
import './PlaceOrder.css'

const PlaceOrder = () => {
  return (
    <div className="placeorder">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multifields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multifields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multifields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder='Phone'/>
      </div>
      <div className="place-order-right"></div>
    </div>
  );
}

export default PlaceOrder
