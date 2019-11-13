import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { selectCartItemsCount } from "../../redux/cart/cartSelector";
import { createStructuredSelector } from 'reselect'
import './cartIcon.scss'
import {toggleCartHidden} from "../../redux/cart/cardActions";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return(
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'> {itemCount} </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)