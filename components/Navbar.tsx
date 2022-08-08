import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { GoogleLogin, googleLogout  } from '@react-oauth/google';
import Logo from '../utils/tiktik-logo.png';
import { createOrGetUser } from '../utils';
import useAuthStore from '../store/authStore';

const Navbar = () => {
  const { userProfile, addUser } = useAuthStore();
  return (
// LOGO
    <div className="w-full flex justify-between items-centre border-b-2 border-gray-200 py-2 px-4">
      <Link href='/'>
      <div className='w-[100px] md:w-[130px]'>
        <Image className='curson-pointer' src={Logo} alt="TikTik" layout="responsive" />
      </div>
      </Link>
      <div>Search</div>

{/* USER LOGIN BUTTON LOGIC */}
      <div>
        {userProfile ? 
        (<div className="flex gap-5 md:gap-10">
          {userProfile.userName}</div>) : 
        (<GoogleLogin 
        onSuccess={(response) => createOrGetUser(response, addUser)} onError={() => console.log('ERROR')} />)}
      </div>
    </div>
  )
}

export default Navbar