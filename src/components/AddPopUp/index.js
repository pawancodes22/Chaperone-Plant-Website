import Popup from 'reactjs-popup'

import {useState} from 'react'

import { IoIosClose } from "react-icons/io";

import './index.css'

const AddPopUp = props => {
    const {item} = props
    const {imageUrl, name, finalPrice} = item
    const [areDetailsConfirmed, changeConfirmStatus] = useState(false)
    return (
        <Popup
            trigger={
                <button type="button" className="add-to-cart-button">Add to Cart</button>
            }
            modal
            nested
        >
            {close =>(
                <>
                    {!areDetailsConfirmed ? (<div className="modal-bg">
                        <div className="modal-close-btn-container">
                            <button className="modal-close-btn" onClick={close}>
                                <IoIosClose className="modal-close-icon" />
                            </button>
                        </div>
                        <h1 className="modal-heading">Checkout</h1>
                        <hr/>
                        <div className="modal-product-details">
                            <img src={imageUrl} alt="plant" className="modal-plant-img" />
                            <div className="modal-product-description">
                                <p className="modal-details-para">{name}</p>
                                <p className="modal-details-para">Price: ₹{finalPrice}/-</p>
                                <button onClick={changeConfirmStatus} className="modal-details-confirm-btn">Confirm Details</button>
                            </div>
                        </div>
                    </div>) : (
                        <div className="modal2-bg">
                            <div className="modal-close-btn-container">
                                <button className="modal-close-btn" onClick={close}>
                                    <IoIosClose className="modal-close-icon" />
                                </button>
                            </div>
                            <h1 className="modal2-heading">Your Cart</h1>
                            <hr className="horizontal-line"/>
                            <div className="modal2-content-container">
                                <p className="congratulations-text">
                                    Congratulations
                                    <br />
                                    Order Placed!
                                </p>
                                <img src="https://res.cloudinary.com/dt0mcvcq3/image/upload/v1729415788/Chaperonw/congralations_plant_oet9gx.png" alt="animated plant" />
                                <p className="modal2-thank-you-text">Thank you for choosing Chaperone services.
                                We will soon get in touch with you!</p>
                                <button onClick={close} className="continue-shopping-btn">Continue Shopping</button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </Popup>
    )}
export default AddPopUp