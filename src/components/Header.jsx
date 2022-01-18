import React, { useRef,useState } from 'react'
import logo from '../assets/icons/Subtract.png'
import { BiMenuAltLeft } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
function Header() {
    const aboutRef = useRef('aboutRef')
    const toAbout = () => aboutRef.current.scrollIntoView()
    const [open,setOpen] = useState(false)
    return (
        <div>
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
                {
                    open ?
                        <AiOutlineClose className='menu-icon' onClick={() => setOpen(false)} /> :
                        <BiMenuAltLeft className='menu-icon' onClick={() => setOpen(true)} />
                }
            </div>
            <div className={open ? 'mobile-navigation open' : 'mobile-navigation'} >
                <ul className='nav-link-mobile'>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li ><a href='#about'>About</a></li>
                    <li onClick={() => setOpen(false)}><a href='#contact'>Contact</a></li>
                    <li onClick={() => setOpen(false)} >Close</li>
                </ul>
            </div>
        </div>
        
    )
}

export default Header
