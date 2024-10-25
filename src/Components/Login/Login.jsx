import React from 'react'
import './Login.css'
import Name from '../../base/Names/Name'
import Input from '../../base/FormInput/Input'
import google from '../../assets/icons/google_logo.png'
import apple from '../../assets/icons/apple_logo.png'

function Login() {
  return (
    <div className='login_container'>
        <div className="login_form_container">
            <div className="gif_video"></div>

            <div className="login_form">
                <h1>Create an account</h1>
                <p>Already have an account? <span>Log in</span></p>
                <form action="" id='login_form'>

                    <div className="names">
                        <Name placeholder={'First Name'} name={'First Name'}/>
                        <Name placeholder={'Last Name'} name={'Last Name'}/>
                    </div>
                    <Input type={'email'} placeholder={'Enter Email'} name={'Email'}/>
                    <Input type={'password'} placeholder={'Enter Password'} name={'Password'}/>
                </form>
                
                <div className="terms_conditions">
                    <input type="checkbox" id='terms_checkbox'/>
                    <p>I agree to the terms and conditions</p>
                </div>
                <button type="submit" form='login_form' id='create_account_btn'>Create Account</button>
                <div className="other_methods">
                    <div></div>
                    <p>Or register with</p>
                    <div></div>
                </div>
                <div className="social_media">
                    <div className="google">
                        <div className="google_logo">
                            <img src={google} alt="Google Logo" />
                        </div>
                        <p>Google</p>
                    </div>

                    <div className="apple">
                    <div className="apple_logo">
                            <img src={apple} alt="Apple Logo" />
                        </div>
                        <p>Apple</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Login
