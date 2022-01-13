import React from 'react'
import { saveAs } from 'file-saver';
import { useInView } from 'react-intersection-observer'
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Project from './Project'
import Skill from './Skill'
import SkillAnimation from './SkillAnimation'
console.log(process.env.REACT_APP_CLIENT_URL)
function Landing() {
    const [ref, inView] = useInView({threshold: 0,})
    const saveFile = () => {
        window.open('https://drive.google.com/uc?export=download&id=1mz8Gup1ziRqkPgc7klM_y2Rubhmrnd__')
    };
    return (
        <div className='root' id='home'>
            <div className='landing-section' ref={ref}>
                <Header />
                <div className="flex-box_between">
                    <div className="welcome-div">
                        {inView && 
                            <div className='welcome-note'>
                                <h1 className='hi'>Hi, </h1>
                                <h1 className='name'>I’m Ravishankar</h1>
                                <p className='sc'>MERN Stack Developer</p>
                                <div>
                                    <div className='cv-div'>
                                        <button onClick={saveFile} className='cv-btn'>Download CV</button>
                                    </div>
                                </div>
                            </div>
                        }
                        
                        <SkillAnimation inView={inView}  />
                    </div>

                    <div className='flex-box_between profile-container'>
                        {/* <img src="https://i.ibb.co/NxLvkPc/pngwing-com-9.png" alt="" /> */}
                    </div>
                </div>
               
            </div>
            <Skill />
            <Project />
            <About />
            <Footer />
        </div>
        
    )
}

export default Landing
