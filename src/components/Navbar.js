import React from 'react'
import logo from "../Assets/svg.ghost-orb-logo.png"
import '../Styles/navbar.css'


function Navbar() {
    return (
        <div className='navbar_main_container'>
            <div className='logo_container'>
                <img src={logo}/>
            </div>
            <div className='list_signup'>
            <div className='list_container'>
                <p>product</p>
                <p>resourse</p>
                <p>pricing</p>
                <p>contact</p>
            </div>
            <div className='signup_container'>
             <p>sign up</p>
            </div>
            </div>
            
        </div>
        )       
}

export default Navbar