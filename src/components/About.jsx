import React from 'react'
import {GoLocation, GoMail} from 'react-icons/go'
import Divider from './Divider'
import { IoCallOutline } from 'react-icons/io5'
function About() {
    return (
        <div className='about_page'>
            <h1>Personal Inforamtion</h1>
            <div className="about_upper flex-box_between">
                <div>
                    <h2>Ravishanakr Kumar</h2>
                    {/* <h2>Address</h2> */}
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
                    
                    
                </div>
                
                <div className=''>
                    <div className='bubble' style={{background:'rgb(0,0,0,.02)'}}></div>
                    <img src="https://i.ibb.co/r3mMjcb/IMG20200826131702-2.jpg" alt="" />
                </div>
                
            </div>
            
            {/* <Divider  /> */}
            <div className="about-edu">
                
                <h2>Education</h2>
                <Divider />
                <h4>Primary</h4>
                <p>Magadh Children Academy and Gayatri Public School Gaya, Bihar</p>
                <h4>Matriculation</h4>
                <p>High School Amarut Gaya, Bihar</p>
                <h4>I.Sc</h4>
                <p>High School Amarut Gaya, Bihar</p>
                <h4>B.Tech in Electorics & Communication</h4>
                <p>B.P Poddar Institute of Management and Technology Kolkata, West Bengal</p>
                
            </div>
            <div className='cake'>
                <img src="https://i.ibb.co/vcLSkbD/output-onlinegiftools-1.gif" alt="" />
                <p>On 2nd September</p>
            </div>
            <div className="quote">
                <span><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perspiciatis adipisci ipsum</q></span> <span className='qb'>- Ravishankar</span>
            </div>
        </div>
    )
}

export default About
