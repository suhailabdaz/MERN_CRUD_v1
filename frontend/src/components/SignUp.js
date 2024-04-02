import React from 'react'

function SignUp() {
  return (
    <div className='mx-[32vw] my-[10vh] w-4/12 items-center'>
        <h1 className='flex justify-center font-oblong text-5xl my-4'>Create Account</h1>
        <div>
        <form>
          <input className=' m-4 p-4 rounded-lg w-full border-2 border-black' type='text' placeholder='Full Name'/>
          <input className=' m-4 p-4 rounded-lg w-full border-2 border-black' type='E-mail' placeholder='E-mail'/>
          <input className='m-4 p-4 rounded-lg w-full border-2 border-black' type='Password' placeholder='Password'/>
          <input className='m-4 p-4 rounded-lg w-full border-2 border-black' type='Password' placeholder='Confirm Password'/>
          <div className='flex justify-center'>
          <button className=' m-4 p-4 rounded-lg bg-stone-950 text-white' type='button'>SignUp</button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default SignUp