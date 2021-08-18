import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Skill from "./components/Skill";

function App() {
	const [page,setPage] = useState(1)
	window.onscroll = (e) =>{
		// console.log(e)
		const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
		const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		console.log(currentPosition)
		const currentHeight = window.screen.availHeight
		console.log(currentHeight)
		console.log(window)
		
		window.onscroll = function (params) {
			console.log(params)
			params.preventDefault()
			// console.log(currentPosition)
			// if(window.pageYOffset > 200){
			// 	window.scrollTo(window.pageXOffset, page + 982)
			// }
			// if(window.pageYOffset+200 > window.availHeight){
			// 	window.scrollTo(window.pageXOffset, page + 982*2)
			// }
			// setPage(2)
			// console.log(window.pageYOffset)
		}
		
	}
	const buttonHandler = (e)=>{
		if(page==3){
			return setPage(1)
		}
		return setPage(page+1)
		
	}
	useEffect(() => {
		return () => {
			
		};
	}, []);
    return (
		<div className='home-page'>
			{page==1 && <Landing />}
			{page==2 && <Skill />}
			{page==3 && <Footer />}
			{/* <Landing />
			<Skill />
			<Footer /> */}
			<button className='abs-button' onClick={buttonHandler}>Next</button>
		</div>
    );  
}

export default App;
