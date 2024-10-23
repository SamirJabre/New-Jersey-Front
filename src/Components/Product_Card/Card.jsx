import React from 'react'
import './Card.css'

function Card() {
  return (
    <div className="card_container">

        <div className="product_image_container">
        <img src="https://cdn.shopify.com/s/files/1/0615/4456/2874/products/4065415579257_1.jpg?v=1665067107" alt="Men Germany 24 Away Jersey, Pink" className="product-image"/>
        </div>


        <div className="card_content">
            <h3 className="product_title">Men Germany 24 Away Jersey, Pink</h3>
            <div className="price_details">
                <p className="product_price">Price: <span>$40</span></p>
            <button className="add_to_cart_btn">View Details</button>
            </div>
        </div>
    </div>
  )
}

export default Card
