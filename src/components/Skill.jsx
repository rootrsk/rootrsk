import React from 'react'
import { useInView } from 'react-intersection-observer'
import SkillCard from './SkillCard'

function Skill() {
    const [ref, inView] = useInView({threshold: 0,})
    return (
        <div className='skill_page' id='skills'>
            <div className='skill-header'>
                <h2>Skills</h2>
            </div>
            <div className="skills-container" ref={ref}>
                <SkillCard 
                    img='https://i.ibb.co/M5BXRrp/react.png'
                    name='React'
                    color='#00CCFF'
                    background='#00CCFF3B'
                    clsName='react'
                    link='https://reactjs.org/'
                    inView={inView}
                    fill_class='react_fill'
                />
                <SkillCard 
                    img='https://i.ibb.co/GJ45zXp/javascript.png'
                    name='Nodejs'
                    color='#8ACA25'
                    background='#8ACA2559'
                    clsName='react'
                    link='https://nodejs.org/en/docs/'
                    fill_class='node_fill'
                    inView={inView}
                />
                <SkillCard 
                    img='https://i.ibb.co/FVkT2hB/mongodb.png'
                    name='MongoDB'
                    color='#5F3A33'
                    background='#5F3A333B'
                    clsName='react'
                    link='https://docs.mongodb.com/drivers/node/current/'
                    fill_class='mongo_fill'
                    inView={inView}
                />
                <SkillCard 
                    img='https://i.ibb.co/JpbTPhd/redux.png'
                    name='Redux'
                    color='#764ABC'
                    background='#764ABC3D'
                    clsName='react'
                    link='https://redux.js.org/'
                    fill_class='redux_fill'
                    inView={inView}

                />
                <SkillCard 
                    img='https://i.ibb.co/P48hr8G/socket.png'
                    name='Socket.io'
                    color='#010101'
                    background='rgba(203, 203, 203, 0.23)'
                    clsName='react'
                    link='https://socket.io/docs/v4'
                    fill_class='socket_fill'
                    inView={inView}
                />
                <SkillCard 
                    img='https://i.ibb.co/SxzkQXV/java.png'
                    name='Java'
                    color='#E76F00'
                    background='rgba(231, 111, 0, 0.25)'
                    clsName='react'
                    link='https://docs.oracle.com/en/java/'
                    fill_class='java_fill'
                    inView={inView}
                />
                <SkillCard 
                    img='https://i.ibb.co/VCyjBd1/python.png'
                    name='Python'
                    color='#FFD040'
                    background='rgba(255, 209, 65, 0.39)'
                    clsName='react'
                    link='https://docs.python.org/3/'
                    fill_class='python_fill'
                    inView={inView}
                />
                <SkillCard 
                    img='https://i.ibb.co/YccPz3s/c.png'
                    name='C'
                    color='#3949AB'
                    background='rgba(57, 73, 171, 0.21)'
                    clsName='react'
                    link='https://devdocs.io/c/'
                    fill_class='c_fill'
                    inView={inView}
                />
                <SkillCard 
                    img='https://i.ibb.co/5R7Cphk/html.png'
                    name='Html'
                    color='#E34F26'
                    background='rgba(227, 79, 38, 0.26)'
                    clsName='react'
                    link='https://developer.mozilla.org/en-US/docs/Web/HTML'
                    fill_class='html_fill'
                    inView={inView}
                />
                <SkillCard 
                    img='https://i.ibb.co/KhdmC4v/css.png'
                    name='Css'
                    color='#3873B7'
                    background='rgba(33, 98, 175, 0.26)'
                    clsName='react'
                    link='https://developer.mozilla.org/en-US/docs/Web/CSS'
                    fill_class='css_fill'
                    inView={inView}
                />
                <SkillCard 
                    img='https://i.ibb.co/kJDvCD8/sass.png'
                    name='Sass'
                    color='#CC6699'
                    background='rgba(255, 78, 166, 0.27)'
                    clsName='react'
                    link='https://sass-lang.com/documentation'
                    fill_class='sass_fill'
                    inView={inView}
                />
                <SkillCard 
                    img='https://i.ibb.co/gmbV4hR/figma.png'
                    name='Figma'
                    color='#333333'
                    background='rgba(51, 51, 51, 0.26)'
                    clsName='react'
                    link='https://www.figma.com/'
                    fill_class='figma_fill'
                    inView={inView}
                />
            </div>
        </div>
    )
}

export default Skill
