import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import './header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/CartIcon'
import CartDropDown from '../cart-dropdown/CartDropDown'
import { auth } from "../../firebase/firebase.util";
import {selectCurrentUser} from "../../redux/user/userSelector";
import {selectCartHidden} from "../../redux/cart/cartSelector";
import { createStructuredSelector} from 'reselect'

const Header = ({currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'> SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden?
                null
                : <CartDropDown/>
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
   hidden :selectCartHidden ,
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Header)
