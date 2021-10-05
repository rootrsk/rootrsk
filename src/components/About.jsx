import React from 'react'
import {GoLocation, GoMail} from 'react-icons/go'
import Divider from './Divider'
import { IoCallOutline } from 'react-icons/io5'
import { useInView } from 'react-intersection-observer'
function About() {
    const [aboutRef,inView] = useInView({threshold:0})
    return (
        <div className='about_page' ref={aboutRef} id='about'>
            <h1>Personal Information</h1>
            {inView && <div className="about-edu">
                <div className="about_upper flex-box_between">
                    <div>
                        <h2>Ravishanakr Kumar</h2>
                        <div className="it-flex">
                            <GoLocation />
                            <p>Kothwara Dobhi Gaya Biahr 824201</p>   
                        </div>
                        <div className="it-flex">
                            <GoMail />
                            <p>rootrsk@gmail.com</p>   
                        </div>
                        <div className="it-flex">
                            <IoCallOutline />
                            <p>+916201004131</p>   
                        </div>
                        <div style={{marginTop:'10px'}}>
                            <p>Strong in design and integration with intuitive problem-solving skills. Proficient in Web Technology. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='bubble-img' style={{background:'rgb(0,0,0,.02)'}}></div>
                        <img src="https://i.ibb.co/r3mMjcb/IMG20200826131702-2.jpg" alt="" />
                    </div>
                    
                </div>
                <div className="">
                    <h2>Education</h2>
                    <h4>Primary</h4>
                    <p>Magadh Children Academy and Gayatri Public School Gaya, Bihar</p>
                    <h4>Matriculation</h4>
                    <p>High School Amarut Gaya, Bihar</p>
                    <h4>I.Sc</h4>
                    <p>High School Amarut Gaya, Bihar</p>
                    <h4>B.Tech in Electorics & Communication</h4>
                    <p>B.P Poddar Institute of Management and Technology Kolkata, West Bengal</p>
                </div>
            </div>}
            {inView && <div className='cake' >
                <div>
                    <img  src="https://i.ibb.co/vcLSkbD/output-onlinegiftools-1.gif" alt="" />
                    <p>On 2nd September</p>
                </div>
            </div>}
            <div className="quote">
                <span><q>Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do</q></span> 
                {/* <span className='qb'>- Johann Wolfgang</span> */}
            </div>
        </div>
    )
}

export default About
