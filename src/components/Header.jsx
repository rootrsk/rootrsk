import React, { useRef } from 'react'
import logo from '../assets/icons/Subtract.png'
function Header() {
    const aboutRef = useRef('aboutRef')
    const toAbout = () => aboutRef.current.scrollIntoView()
    return (
        <div className="flex-box_between center">

            {/* <h1 className='logo'>Rootrsk</h1> */}
            <img src={logo} className='logo' />
            <div className='flex-box_between'>
                {/* <button className='link-btn'>Contact</button>
                <button className='link-btn'>Projects</button> */}
                <ul className='nav-link'>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li ><a href='#about'>About</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
                
            </div>
        </div>
)
}

export default Header
