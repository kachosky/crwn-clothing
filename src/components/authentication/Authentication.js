import React from 'react'

import SignIn from '../signin/SignIn'
import SignUp from '../signup/SignUp'

import './authentication.scss'

const Authentication = () => (
    <div className='authentication'>
        <SignIn/>
        <SignUp/>
    </div>
)


export default Authentication