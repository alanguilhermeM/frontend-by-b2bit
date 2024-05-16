import React, { useEffect, useState } from 'react'
import { getProfile } from '../utils/api'
import { TUser, UserProfile } from '../types'
import { staticUser } from '../utils/staticUser'
import { useNavigate } from 'react-router-dom'

const Profile: React.FC = () => {
  const [user, setUser] = useState<TUser | undefined>(undefined)
  const [staticUserP, setStaticUserP] = useState<UserProfile | undefined>(undefined)
  let navigate = useNavigate();
  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const local = localStorage.getItem('tokens')
    if (local) {
      const tokens = JSON.parse(local)
      // console.log(tokens.access)
      const userP = await getProfile(tokens.access)
      setUser(userP.data)
      console.log(user)
      // O retorno da api get não está de acordo com o retorno especificado nos requisitos
    }
    setStaticUserP(staticUser)
  }

  const handleClick = () => {
    localStorage.removeItem('tokens')
    navigate('/')
  }

  return (
      <div className='bg-[#F1F5F9] h-screen flex justify-center'>
        <div className='w-full bg-white h-[70px] flex justify-end items-center fixed'>
          <button 
            className='w-[272px] h-[44px] relative right-7 rounded-[6.33px] bg-[#02274F] text-white font-bold text-center transition-all duration-300 hover:bg-opacity-80'
            onClick={handleClick}
          >Logout</button>
        </div>
        <div className='flex flex-col justify-center items-center rounded-[16px] bg-[#FDFDFD] relative top-[215px] w-[406px] h-[365px] shadow-md'>
          <h2 className='relative bottom-10 font-medium'>Profile Picture</h2>
          <img src={staticUserP?.avatar.image_high_url} alt='profile' width={80} className='rounded-lg relative bottom-8'/>
          
          <div className='relative w-[80%] h-[64px] bottom-4'>
            <p className='relative bottom-2'>Your <span className='font-semibold'>Name</span></p>
            <p className='bg-[#F4F4F4] rounded-lg pt-[22px] pb-[22px] pl-[22px] text-[#262626]'>{staticUserP?.name} {staticUserP?.last_name}</p>
          </div>

          <div className='relative w-[80%] h-[64px] top-5'>
            <p className='relative bottom-2'>Your <span className='font-semibold'>E-mail</span></p>
            <p className='bg-[#F4F4F4] rounded-lg pt-[22px] pb-[22px] pl-[22px] text-[#262626]'>{staticUserP?.email}</p>
          </div>
        </div>
      </div>
  )
}

export default Profile;