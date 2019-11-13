import React from 'react'
import {connect } from 'react-redux'
import { selectCartItems } from "../../redux/cart/cartSelector";
import CustomButtom from '../custom-button/CustomButton'
import {withRouter} from 'react-router-dom'
import CartItem from '../cartItem/CartItem'
import {createStructuredSelector} from 'reselect'
import {toggleCartHidden} from "../../redux/cart/cardActions";
import './cartDropDown.scss'

const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown' >
        <div className='cart-items'>
            {
                cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item = {cartItem}/>
                    ))
                : (
                  <span className='empty-message'> Your cart is empty </span>
                )
            }
        </div>
        <CustomButtom onClick={() => {history.push('/checkout'); dispatch(toggleCartHidden()) }}> GO TO CHECKOUT </CustomButtom>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropDown))