import React from 'react'

import {useNavigate} from 'react-router-dom'

import './index.css'

const ProductItem = props => {
    const {item} = props
    const {imageUrl, name, specification, rating, originalPrice, finalPrice} = item
    const navigate = useNavigate()
    const openProduct = () => {
        navigate(`/product/${name}`)
    }
    return (
        <li className="product-item">
            <div className="product-first-half">
                <div className="product-img-icon-container">
                    <img className="product-img" src={imageUrl} alt="plant" />
                </div>
                <button type="button" className="view-product" onClick={openProduct}>View Product</button>
            </div>
            <div className="product-second-half">
                <h1 className="product-heading">{name}</h1>
                <p className="product-specification">{specification}</p>
                <div className="product-rating-container">
                    <img src="https://res.cloudinary.com/dt0mcvcq3/image/upload/v1729339028/Chaperonw/RatingImage_ti5kcm.jpg" alt="rating" />
                    <p className="product-rating-para">{rating}</p>
                    
                </div>
                <div className="product-prices-container">
                        <p className="product-original-rate">₹ {originalPrice}</p>
                        <p className="product-final-rate">₹ {finalPrice}</p>
                    </div>
                <div className="product-buttons-container">
                    <button type="button" className="add-to-cart-button">Add to Cart</button>
                    <button type="button" className="buy-on-rent-button">Buy  on Rent</button>
                </div>
            </div>
        </li>
    )    
}

export default ProductItem