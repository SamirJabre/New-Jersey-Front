import React from 'react'
import './Login.css'
import Name from '../../base/Names/Name'
import Input from '../../base/FormInput/Input'

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
            </div>
            
        </div>
    </div>
  )
}

export default Login
