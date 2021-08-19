import React from 'react'

function SkillCard({name,color,img,background,clsName,link}) {
    console.log(background)
    return (
        <div className={`skill-card ${clsName}`} style={{background:background}}  >
            <div className='skill-img_container '>
                <img src={img} alt ='name'  />
                
            </div>
            <div className='progress-bar_container'>
                <div className='progress-empty' >

                </div>
                <div className='progress-fill' style={{background:color}}>

                </div>
            </div>
            <div className='card_button'>
                <button className='learn-more' style={{background:color}} onClick={()=>window.open(link)}>Learn More</button>
            </div>
        </div>
    )
}

export default SkillCard
