import React from 'react'
import { useState } from 'react';
import './Login.css'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate()
  const [data, setdata] = useState(
    {
        name : "",
        email : "",
        password : "",
    }
  )

  const registerUser = async (e) =>{
    e.preventDefault()
    const {name, email,password} = data
    try{
      const {data} = await axios.post('/register', {
        name, email, password
      })
      if(data.error){
        toast.error(data.error)
      }else{
        setdata({})
        toast.success('Registration Successful')
        navigate('/login')
      }
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <div className='container'>
        <div className="header">
            <div className="text">REGISTRATION</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <form onSubmit={registerUser}>
                <div className="input">
                    <FaUser className='icon'/>
                    <input type="text" placeholder='Name' value={data.name} onChange={(e) => setdata({...data, name: e.target.value})}/>
                </div>
                <div className="input">
                    <MdEmail className='icon'/>
                    <input type="email" placeholder='Email' value={data.email} onChange={(e) => setdata({...data, email: e.target.value})}/>
                </div>
                <div className="input">
                    <RiLockPasswordFill className='icon'/>
                    <input type="password" placeholder='Password' value={data.password} onChange={(e) => setdata({...data, password: e.target.value})}/>
                </div>
                <button type='submit' className="submit">Register</button>
            </form>
        </div>
    </div>
  );

}

export default Register