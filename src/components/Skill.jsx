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
                />
                <SkillCard 
                    img='https://i.ibb.co/GJ45zXp/javascript.png'
                    name='React'
                    color='#8ACA25'
                    background='#8ACA2559'
                    clsName='react'
                />
                <SkillCard 
                    img='https://i.ibb.co/FVkT2hB/mongodb.png'
                    name='React'
                    color='#5F3A33'
                    background='#5F3A333B'
                    clsName='react'
                />
                <SkillCard 
                    img='https://i.ibb.co/JpbTPhd/redux.png'
                    name='React'
                    color='#764ABC'
                    background='#764ABC3D'
                    clsName='react'

                />
                <SkillCard 
                    img='https://i.ibb.co/P48hr8G/socket.png'
                    name='React'
                    color='#010101'
                    background='rgba(203, 203, 203, 0.23)'
                    clsName='react'
                />
                <SkillCard 
                    img='https://i.ibb.co/SxzkQXV/java.png'
                    name='React'
                    color='#E76F00'
                    background='rgba(231, 111, 0, 0.25)'
                    clsName='react'
                />
                <SkillCard 
                    img='https://i.ibb.co/VCyjBd1/python.png'
                    name='React'
                    color='#FFD040'
                    background='rgba(255, 209, 65, 0.39)'
                    clsName='react'
                />
                <SkillCard 
                    img='https://i.ibb.co/YccPz3s/c.png'
                    name='React'
                    color='#3949AB'
                    background='rgba(57, 73, 171, 0.21)'
                    clsName='react'
                />
                <SkillCard 
                    img='https://i.ibb.co/5R7Cphk/html.png'
                    name='Html'
                    color='#E34F26'
                    background='rgba(227, 79, 38, 0.26)'
                    clsName='react'
                />
                <SkillCard 
                    img='https://i.ibb.co/KhdmC4v/css.png'
                    name='Css'
                    color='#3873B7'
                    background='rgba(33, 98, 175, 0.26)'
                    clsName='react'
                />
                <SkillCard 
                    img='https://i.ibb.co/kJDvCD8/sass.png'
                    name='Sass'
                    color='#CC6699'
                    background='rgba(255, 78, 166, 0.27)'
                    clsName='react'
                />
            </div>
            

            
        </div>
    )
}

export default Skill
