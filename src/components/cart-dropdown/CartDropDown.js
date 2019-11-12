import React from 'react'

import CustomButtom from '../custom-button/CustomButton'

import './cartDropDown.scss'

const CartDropDown = ({ toggleCartHidden }) => (
    <div className='cart-dropdown' >
        <div className='cart-items'/>
        <CustomButtom> GO TO CHECKOUT </CustomButtom>
    </div>
)

export default CartDropDown