import React from 'react'
import Header from './Header'
import SkillAnimation from './SkillAnimation'

function Landing() {
    return (
        <div className='landing-section'>
            <Header />
            <div className="flex-box_between">
                <div className="welcome-div">
                    <div className='welcome-note'>
                        <h1 className='hi'>Hi, </h1>
                        <h1 className='name'>I’m Ravishankar</h1>
                        <p className='sc'>Full Stack Developer</p>
                        <div>
                            <button className='cv-btn wc'>Download CV</button>
                        </div>
                    </div>
                    
                    <SkillAnimation />
                </div>

                <div className='flex-box_between profile-container'>
                    <img src="https://i.ibb.co/NxLvkPc/pngwing-com-9.png" alt="" />
                </div>
            </div>

            
            
        </div>
    )
}

export default Landing
