import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Loginform from '../../components/Loginform'
import { UserState } from '../../contexts/userProvider'
import {Navigate}  from 'react-router-dom'
const Login = () => {
  const { user } = UserState();
  if (user) {
    return <Navigate to="/dashboard" />;
  }
  return (
   <>
    <Navbar/>
    <Loginform/>
    <Footer/>
   </>
  )
}

export default Login