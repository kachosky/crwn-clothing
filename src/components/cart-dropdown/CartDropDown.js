import React from 'react'
import {connect } from 'react-redux'
import { selectCartItems } from "../../redux/cart/cartSelector";
import CustomButtom from '../custom-button/CustomButton'

import CartItem from '../cartItem/CartItem'

import './cartDropDown.scss'

const CartDropDown = ({ toggleCartHidden, cartItems }) => (
    <div className='cart-dropdown' >
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item = {cartItem}/>
                ))
            }
        </div>
        <CustomButtom> GO TO CHECKOUT </CustomButtom>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps, null)(CartDropDown)