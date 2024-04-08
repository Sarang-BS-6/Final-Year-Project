import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [data, setdata] = useState(
        {
            name : "",
            password : "",
        }
    )
  const loginUser = async(e) =>{
        e.preventDefault()
        const {name , password} = data

        try {
            const {data} = await axios.post('/login', {
                name, 
                password
            });
            if(data.error){
                setdata({})
                toast.error(data.error)  
            }
            else{
                setdata({})
                toast.success('Login Successful')
                navigate('/upload')
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='container login'>
        <div className="header">
            <div className="text">LOGIN</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <form onSubmit={loginUser}>
                <div className="input">
                    <FaUser className='icon'/>
                    <input type="text" placeholder='Name' value={data.name} onChange={(e) => setdata({...data, name: e.target.value})}/>
                </div>
                <div className="input">
                    <RiLockPasswordFill className='icon'/>
                    <input type="password" placeholder='Password' value={data.password} onChange={(e) => setdata({...data, password: e.target.value})}/>
                </div>
                <button type='submit' className="submit">LogIn</button>
            </form>
        </div>
        <div className="forgot-password">Forgot Password?</div>
    </div>
  )
}

export default Login