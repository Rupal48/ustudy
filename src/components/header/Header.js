import React from 'react'
import "./_header.scss"

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

import logo from '../logo.PNG';

const header = ({handleToggleSidebar}) => {
  return (
    <div className="border border-dark header">    
      <FaBars
        className='header_menu' 
        size={26}
        onClick={() => handleToggleSidebar()}
      />

      <img
        src={logo}
        alt=''
        className='header_logo'
      />

      <form>
        <input type='text' placeholder='search'/>
        <button type='submit'>
          <AiOutlineSearch size={22}/>
        </button>
      </form>

      {/* A separate div for icons */}
      <div className='header_icons'>
        <MdNotifications size={20}/>
        <MdApps size={20}/>
        <img 
          src='https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj' 
          alt='avatar'
        />
      </div>

    </div>
  )
}

export default header
