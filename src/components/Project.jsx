import React from 'react'

function Project() {
    return (
        <div className='project_page'>
            <div className="skill-header">
                <h2>Projects</h2>
            </div>
            <div className="markup_container">
                <div className="markup-div fl">
                    <img src="https://i.ibb.co/bP0Qz6w/Frame-1.png" alt="" />
                    <div className="project-details">
                        <h2>Cadrewill- Course Selling Web App</h2>
                        <p>The main objective is to provide users, a fully functional education platform to prepare for various exams and interviews. </p>
                        <h4>Features</h4>
                        <ul>
                            <li>Restful Api</li>
                            <li>Secure Authentication</li>
                            <li>Paid and free Courses</li>
                            <li>Notifications regarding various exam.</li>
                            <li>Tests and Quizs</li>
                            <li>Admin Dashboard with CMS</li>
                        </ul>
                        <h4>Technology </h4>
                        <ul>
                            <li>Nodejs</li>
                            <li>React</li>
                            <li>Mongodb</li>
                            <li>Razorpay</li>
                        </ul>
                        <button>Github</button>
                    </div>
                    {/* <img src="https://i.ibb.co/jVV02Jm/Frame-2.png" alt="" /> */}
                    {/* <img src="https://i.ibb.co/XS1SRgx/X-1.png" alt="" /> */}
                </div>
                <div className="markup-div fu">
                    <img src="https://i.ibb.co/bP0Qz6w/Frame-1.png" alt="" />
                    <div className="project-details">
                        <h2>HomeAutomation -  Mobile & Web App</h2>
                        
                        <p>Fully functional web and mobile-based control home automation system for controlling various home appliances from anywhere.</p>
                        <h4>Features</h4>
                        <ul>
                            <li>Realtime room conditons (humidity,temperature,air-quality)</li>
                            <li>Secure Authentication</li>
                            <li>Full access over various home appliances</li>
                            <li>In and out room weather comperison</li>
                            <li>Critical condition alarm</li>
                            <li></li>
                        </ul>
                        <h4>Technology </h4>
                        <ul>
                            <li>Nodejs</li>
                            <li>React</li>
                            <li>Mongodb</li>
                            <li>Arduino</li>
                            <li>React Native</li>
                            <li>Web Sockets</li>
                        </ul>
                        <button>Github</button>
                    </div>
                </div>
                <div className="markup-div fr">
                    <img src="https://i.ibb.co/bP0Qz6w/Frame-1.png" alt="" />
                    <div className="project-details">
                        <h2>TestHunt - Test Series Web App</h2>
                        <ul>
                            <li></li>
                            <li>Monthaly, Yearly performance, accuray and other statics are available.</li>
                        </ul>
                        <button>Github</button>
                    </div>
                </div>
                
                
                
            </div>
        </div>
    )
}

export default Project
