import React from 'react'

import './checkItem.scss'

const CheckItem = ({ cartItem: { name, imageUrl, price, quantity }}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="item"/>
        </div>
        <div className='name'><span>{name}</span></div>
        <div className='price'><span>${price}</span></div>
        <div className='quantity'><span>{quantity}</span></div>
        <div className='remove-button'>&#10005;</div>
    </div>
)

export default CheckItem