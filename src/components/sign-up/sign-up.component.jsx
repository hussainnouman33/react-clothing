import React from 'react';

import './sign-up.styles.scss';

import FormInput from './../form-input/form-input.component'
import CustomButton from './../custom-button/custom-button.component'

import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignUp extends React.Component{
    constructor(props) {
        super(props);




        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit =async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        
        if (password != confirmPassword){
            alert("Passwords dont match")
            return;
            
        }
        
        
        try {
            
        }catch (e) {
            
        }

    }
    handleChange = event=>{
       const {value,name} =event.target
        this.setState({[name]:value})
    }

    render()  {
        const {displayName,email,password,confirmPassword}=this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'> I do not have a  account</h2>

                <span>Sign Up with you email and password</span>


                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput name='displayName' type='text'  label='display Name' handleChange={this.handleChange} value= {displayName}/>
                    <FormInput name='email' type='email'  label='email' handleChange={this.handleChange} value= {email}/>

                    <FormInput name='password' type='password' label='password' handleChange={this.handleChange} value= {password}/>
                    <FormInput name='confirmPassword' type='password' label='confirm assword' handleChange={this.handleChange} value= {confirmPassword}/>

                    <CustomButton type='submit' childern='Sign UP'></CustomButton>
                    {/*<CustomButton  onClick={signInWithGoogle } childern='Sign In with Google'></CustomButton>*/}
                </form>

            </div>
        )
    }

}


export default  SignUp;
