import React from 'react'

function Login() {
  return (
    <div className='mx-[32vw] my-[32vh]w-4/12'>
        <h1 className='font-oblong'>Login</h1>
        <div>
        <form className=' '>
          <input className='w-full border-2 border-black' type='E-mail' placeholder='E-mail'/>
          <input className='w-full border-2 border-black' type='Password' placeholder='Password'/>
          <button type='button'>Login</button>
        </form>
        </div>
    </div>
  )
}

export default Login