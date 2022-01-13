import React, { useState } from 'react'
import { FiPhoneCall, FiYoutube } from 'react-icons/fi'
import { GoMail } from 'react-icons/go'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { useInView } from 'react-intersection-observer'
function Footer() {
    const [ref,inView] = useInView({threshold:0})
    const [error,setError]= useState('')
    const [loading,setLoading] = useState(false)
    const [message,setMessage]  = useState('')
    const  sendMail = async(e)=>{
        e.preventDefault()
        setError('')
        setMessage('')
        setLoading(true)
        console.log(e.target[0].value)
        const name = e.target[0].value
        const email = e.target[1].value
        const subject = e.target[2].value
        const message = e.target[3].value
        
        const response = await fetch('http://localhost:3001/api/rootrsk/send-mail',{
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({name,email,subject,message})
        }).catch(e=>console.log(e))
        try {
            const data =await response.json()
            if(data.error){
                setError(data.error)
            }else{
                setMessage('Message sent Successfully')
            }
            
        } catch (error) {
            setError('Something went wrong.')
        }
        setLoading(false)
        return false
        

    }
    return (
        <footer className='footer' id='contact'>
            <div ref={ref}>
                {inView && <div >
                    <div className='get-in-touch'>
                        <div className="form-div">
                            <h2>Get in Touch</h2>
                        <form onSubmit={sendMail}>
                                <input 
                                    type="text" 
                                    name="name" id="" 
                                    placeholder='Name'
                                    required
                                />
                                <input 
                                    type="text" 
                                    name="Email" 
                                    id="" 
                                    placeholder='Email'
                                    required
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
                                    required
                                />
                                <button>Send</button>
                                <div style={{padding:'0px 0px 10px 0px'}}>
                                    {error && <p style={{color:'red'}}>{error}</p>}
                                    {loading && <p style={{color:'blue'}}>{'Sending'}</p>}
                                    {message && <p style={{color:'green'}}> &#10004; {message} </p>}
                                </div>
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
                </div>}
            </div>
            
        </footer>
    )
}

export default Footer
