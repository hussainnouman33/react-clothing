import React from 'react';

import './sign-in.styles.scss';

import FormInput from './../form-input/form-input.component'
import CustomButton from './../custom-button/custom-button.component'

import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props) {
        super(props);




        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = event=>{
        event.preventDefault();
        this.setState({
            email:'',
            password:''
        })
    }
    handleChange = event=>{
       const {value,name} =event.target
        this.setState({[name]:value})
    }

    render()  {
        return(
            <div className='sign-in'>
                <h2 > I have already a  account</h2>

                <span>Sign In with you email and password</span>


                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email'  label='email' handleChange={this.handleChange} value= {this.state.email}/>

                    <FormInput name='password' type='password' label='password' handleChange={this.handleChange} value= {this.state.password}/>
                    <CustomButton type='submit' childern='Sign In'></CustomButton>
                    <CustomButton  onClick={signInWithGoogle } childern='Sign In with Google'></CustomButton>
                </form>

            </div>
        )
    }

}


export default  SignIn;
