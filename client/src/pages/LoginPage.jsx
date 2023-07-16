import React,{useContext} from 'react'
import Navbar from '../components/Navbar/Navbar'
import LoginForm from '../components/LoginForm/LoginForm'
import Footer from '../components/Footer/Footer'
import { useAuth } from '../context/auth';

function LoginPage() {
  
  return (
    <div>
        <Navbar/>
        <LoginForm/>
        <Footer/>
        
    </div>
  )
}

export default LoginPage