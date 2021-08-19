import React from 'react'
import SkillCard from './SkillCard'

function Skill() {
    return (
        <div className='skill_page'>
            <div className='skill-header'>
                <h2>Skills</h2>
            </div>
            <div className="skills-container">
                <SkillCard 
                    img='https://i.ibb.co/M5BXRrp/react.png'
                    name='React'
                    color='#00CCFF'
                    background='#00CCFF3B'
                    clsName='react'
                    link='https://reactjs.org/'
                />
                <SkillCard 
                    img='https://i.ibb.co/GJ45zXp/javascript.png'
                    name='Nodejs'
                    color='#8ACA25'
                    background='#8ACA2559'
                    clsName='react'
                    link='https://nodejs.org/en/docs/'
                />
                <SkillCard 
                    img='https://i.ibb.co/FVkT2hB/mongodb.png'
                    name='MongoDB'
                    color='#5F3A33'
                    background='#5F3A333B'
                    clsName='react'
                    link='https://docs.mongodb.com/drivers/node/current/'
                />
                <SkillCard 
                    img='https://i.ibb.co/JpbTPhd/redux.png'
                    name='Redux'
                    color='#764ABC'
                    background='#764ABC3D'
                    clsName='react'
                    link='https://redux.js.org/'

                />
                <SkillCard 
                    img='https://i.ibb.co/P48hr8G/socket.png'
                    name='Socket.io'
                    color='#010101'
                    background='rgba(203, 203, 203, 0.23)'
                    clsName='react'
                    link='https://socket.io/docs/v4'
                />
                <SkillCard 
                    img='https://i.ibb.co/SxzkQXV/java.png'
                    name='Java'
                    color='#E76F00'
                    background='rgba(231, 111, 0, 0.25)'
                    clsName='react'
                    link='https://docs.oracle.com/en/java/'
                />
                <SkillCard 
                    img='https://i.ibb.co/VCyjBd1/python.png'
                    name='Python'
                    color='#FFD040'
                    background='rgba(255, 209, 65, 0.39)'
                    clsName='react'
                    link='https://docs.python.org/3/'
                />
                <SkillCard 
                    img='https://i.ibb.co/YccPz3s/c.png'
                    name='C'
                    color='#3949AB'
                    background='rgba(57, 73, 171, 0.21)'
                    clsName='react'
                    link='https://devdocs.io/c/'
                />
                <SkillCard 
                    img='https://i.ibb.co/5R7Cphk/html.png'
                    name='Html'
                    color='#E34F26'
                    background='rgba(227, 79, 38, 0.26)'
                    clsName='react'
                    link='https://developer.mozilla.org/en-US/docs/Web/HTML'
                />
                <SkillCard 
                    img='https://i.ibb.co/KhdmC4v/css.png'
                    name='Css'
                    color='#3873B7'
                    background='rgba(33, 98, 175, 0.26)'
                    clsName='react'
                    link='https://developer.mozilla.org/en-US/docs/Web/CSS'
                />
                <SkillCard 
                    img='https://i.ibb.co/kJDvCD8/sass.png'
                    name='Sass'
                    color='#CC6699'
                    background='rgba(255, 78, 166, 0.27)'
                    clsName='react'
                    link='https://sass-lang.com/documentation'
                />
                <SkillCard 
                    img='https://i.ibb.co/gmbV4hR/figma.png'
                    name='Figma'
                    color='#333333'
                    background='rgba(51, 51, 51, 0.26)'
                    clsName='react'
                    link='https://www.figma.com/'
                />
            </div>
            

            
        </div>
    )
}

export default Skill
