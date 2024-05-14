import React from 'react'

const Login: React.FC = () => {
  return (
    <div className='bg-[#FAFAFA] h-screen flex justify-center items-center'>
        <form className='flex flex-col justify-center w-[438px] h-[534px] border-0 rounded-[18px] bg-[#FFFFFF] shadow-2xl'>
            <h1 className='text-[#02274F] text-[94.81px] font-bold'>b2b<span className='text-[#FDCF00]'>it</span></h1>

            <label>E-mail</label>
            <input type='email' placeholder='@gmail.com'/>

            <label>Password</label>
            <input type='password' placeholder='************'/>

            <button type='submit' >Sign In</button>
        </form>
    </div>
  )
}
export default Login;

