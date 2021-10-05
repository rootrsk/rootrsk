import React from 'react'
import InView from 'react-intersection-observer'

function SkillCard({name,color,img,background,clsName,link,fill_class,inView}) {
    return (
        <div>
            {inView && <div className={`skill-card ${clsName}`} style={{background:background}}  >
                <div className='skill-img_container '>
                    <img src={img} alt ='name'  />
                    
                </div>
                <div className='progress-bar_container'>
                    <div className='progress-empty' >

                    </div>
                    <div className={`progress-fill ${fill_class}`} style={{background:color}}>

                    </div>
                </div>
                <div className='card_button'>
                    <button className='learn-more' style={{background:color}} onClick={()=>window.open(link)}>Learn More</button>
                </div>
            </div>}
        </div>
    )
}

export default SkillCard
