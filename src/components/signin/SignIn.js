import React from 'react'

import FormInput from '../form-input/FormInput'
import './signin.scss'

import CustomButton  from '../custom-button/CustomButton'

import { auth, signInWithGoogle} from "../../firebase/firebase.util";

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault()

        const { email, password } = e.target

        try {
            await auth.signInWithEmailAndPassword(email, password)

            this.setState ({ email: '', password: ''})

        }catch (e) {
            console.log(e.message)
        }

    }

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]: value })
    }

    render() {
        return(
            <div className='signin'>
                <h2> I already have an account</ h2>
                <span>Sign in with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign in with Google  </CustomButton>
                    </div>
                </form>
            </div>
        )

    }
}

export default SignIn