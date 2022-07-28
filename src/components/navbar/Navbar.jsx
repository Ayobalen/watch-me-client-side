// import React from 'react'
import { ArrowDropDownRounded, Notifications, SearchRounded } from '@material-ui/icons'
import { useState } from 'react'
import './navbar.scss'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

   window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true)
      return () => ( window.onscroll = null )
   };

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
        <div className='container'>
        <div className='left'>
            <img src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2001.png' 
            alt=''
            />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
            
        </div>
        <div className='right'>
            <SearchRounded className='icon'/>
            <span>KID</span>
            <Notifications className='icon'/>
            <img src='https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
             alt=''
             />
           <div className="profile">
            <ArrowDropDownRounded/>
            <div className="options">
                <span>Settings</span>
                <span>Logout</span>
            </div>
            </div>
            </div>
        </div>
        </div>
  )
}

export default Navbar