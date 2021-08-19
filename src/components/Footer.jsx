import React from 'react'
import { FiPhoneCall, FiYoutube } from 'react-icons/fi'
import { GoMail } from 'react-icons/go'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
function Footer() {
    return (
        <footer className='footer'>
            <div>
                <div className='get-in-touch'>
                    <div className="form-div">
                        <h2>Get in Touch</h2>
                       <form>
                            <input 
                                type="text" 
                                name="name" id="" 
                                placeholder='Name'
                            />
                            <input 
                                type="text" 
                                name="Email" 
                                id="" 
                                placeholder='Email'
                            />
                            <input 
                                type="text" 
                                name="Subject" 
                                id=""
                                placeholder='Subject' 
                            />
                            <textarea 
                                type='text' 
                                name='message' 
                                rows='7' 
                                placeholder='message'
                            />
                            <button>Send</button>
                        </form> 
                    </div>
                    
                </div>
                <div className='socila-media_container'>
                    <div className="contacts">
                        <div className='bubble-container x1' onClick={()=>window.open('tel:+916201004131')}>
                            <div className='bubble '></div>
                            <div className='bubble-icon'>
                                <FiPhoneCall />
                            </div>  
                        </div>
                        <div className='bubble-container x2' onClick={()=>window.open('mailto:rootrsk@gmail.com')}>
                            <div className='bubble '></div>
                            <div className='bubble-icon'>
                                <GoMail />
                            </div>  
                        </div>
                        <div className='bubble-container x3' onClick={()=>window.open('https://github.com/rootrsk')}>
                            <div className='bubble '></div>
                            <div className='bubble-icon'>
                                <AiFillGithub />
                            </div>  
                        </div>
                        <div className='bubble-container x4'>
                            <div className='bubble '></div>
                            <div className='bubble-icon'>
                                <FiYoutube />
                            </div>  
                        </div>
                        <div className='bubble-container x5' onClick={()=>window.open('https://www.linkedin.com/in/rootrsk/')}>
                            <div className='bubble '></div>
                            <div className='bubble-icon'>
                               <FaLinkedinIn />
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
