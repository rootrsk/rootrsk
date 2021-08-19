import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Skill from "./components/Skill";
import contactIcon from './assets/icons/contact.png'
import ProjectIcon from './assets/icons/to-do-list.png'
import SkillIcon from './assets/icons/coordination.png'
import AboutIcon from './assets/icons/userinfo.png'
import HomeIcon from './assets/icons/house.png'
import Project from "./components/Project";
import About from './components/About'
function App() {
	const [page,setPage] = useState(1)
	
	const buttonHandler = (e)=>{
		if(e==='home'){
			return setPage(1)
		}
		if(e==='skills'){
			return setPage(2)
		}
		if(e==='projects'){
			return setPage(3)
		}
		if(e==='about'){
			return setPage(4)
		}
		if(e==='contacts'){
			return setPage(5)
		}
		// return setPage(page+1)
		
	}
	useEffect(() => {
		return () => {
			
		};
	}, []);
    return (
		<div className='home-page'>
			{page===1 && <Landing />}
			{page===2 && <Skill />}
			{page===3 && <Project />}
			{page===4 && <About />}
			{page===5 && <Footer />}

			{/* <Landing />
			<Skill />
			<Footer /> */}
			{/* <button className='abs-button' onClick={buttonHandler}>Next</button> */}
			<div className='abs-buttons'>
				
				<button onClick={()=>buttonHandler('contacts')} className>
					<img src={contactIcon} alt='ContactPage' />
				</button>
				<button onClick={()=>buttonHandler('about')}>
					<img src={AboutIcon} alt='AboutPage' />
				</button>
				<button onClick={()=>buttonHandler('projects')}>
					<img src={ProjectIcon} alt="ProjectPage" />
				</button>
				<button onClick={()=>buttonHandler('skills')} >
					<img src={SkillIcon} alt="SkillPage" />
				</button>
				<button onClick={()=>buttonHandler('home')}>
					<img src={HomeIcon} alt="Homepage" />
				</button>
				
			</div>
		</div>
    );  
}

export default App;
