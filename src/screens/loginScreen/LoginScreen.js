import React, { useEffect } from 'react'

import './loginScreen.scss'

import logo from '../../components/logo.PNG';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/auth.action';

import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {

  const dispatch = useDispatch()

  const accessToken = useSelector(state => state.auth.accessToken)

  const handleLogin = () => { 
    dispatch(login())
  }

  const navigate = useNavigate()

  // Using useEffect to direct the user to the homescreen if login is successful
  // This is basically done by checking if the accessToken is null or not
  // If at anytime it is not null direct the user to the homescreen
  useEffect(() => {

    if (accessToken) {
      navigate('/');
    }

  },[accessToken, navigate])

  return (
    <div className='login'>
        <div className='login_container'>
            <img 
                src={logo}
                alt=''/>
            <button onClick={handleLogin}>Google Login</button>
            <p>Best Web App for Studies</p>
        </div>
    </div>
  )
}

export default LoginScreen
