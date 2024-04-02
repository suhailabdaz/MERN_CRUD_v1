import React from 'react'
import {useNavigate,Link} from 'react-router-dom'
import axios from '../Axios'
import { useState } from 'react'
function SignUp() {
  const navigate = useNavigate()

  const [user, setuser] = useState({
    name : '',
    email:'',
    password:'',
    confirmPassword:''
})

const handleSubmit=async (e)=>{
  e.preventDefault()
  
  try{
      await axios.post('/create',user)
      navigate('/')
  }catch(err){
      if(err.request.status === 400){
          alert('user exists..')
      };
  }        
  setuser({
      name : '',
  email:'',
  password:'',
  confirmPassword:''
  })
}
  return (
    <div className='mx-[32vw] my-[10vh] w-4/12 items-center'>
        <h1 className='flex justify-center font-oblong text-5xl my-4'>Create Account</h1>
        <div>
        <form >
          <input className=' m-4 p-4 rounded-lg w-full border-2 border-black' type='text' value={user.name}  onChange={(e)=> setuser({...user,name: e.target.value})} placeholder='Full Name'/>
          <input className=' m-4 p-4 rounded-lg w-full border-2 border-black' type='E-mail'  value={user.email}
                            onChange={(e)=> setuser({...user,email: e.target.value})} placeholder='E-mail'/>
          <input className='m-4 p-4 rounded-lg w-full border-2 border-black' type='Password' value={user.password} onChange={(e)=> setuser({...user,password: e.target.value})}  placeholder='Password'/>
          <input className='m-4 p-4 rounded-lg w-full border-2 border-black' type='Password' value={user.confirmPassword} onChange={(e)=> setuser({...user,confirmPassword: e.target.value})} placeholder='Confirm Password'/>
          <div className='flex justify-center'>
          <button className=' m-4 p-4 rounded-lg bg-stone-950 text-white' type='button' onClick={handleSubmit}>SignUp</button>
          </div>
        </form>
        <span>
                Copyright © 2024 <Link className='text-sm text-blue-500 hover:underline ' to='/'>SignIn</Link>
                </span>
        </div>
    </div>
  )
}

export default SignUp