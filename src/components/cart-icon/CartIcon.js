import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'

import './cartIcon.scss'
import {toggleCartHidden} from "../../redux/cart/cardActions";

const CartIcon = ({ toggleCartHidden, cardItems }) => {
    return(
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'> {cardItems ? cardItems.length: 0} </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({ cart: { cardItems }}) => ({
    cardItems
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)