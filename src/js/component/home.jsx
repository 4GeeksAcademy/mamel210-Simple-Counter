import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { SecondsCounter } from "./SecondsCounter.jsx"

//create your first component
const Home = () => {
	const [counter, setCounter] = useState(0)
	useEffect(() => {
		const intervalo = setInterval(() => {
			setCounter((prevState) => prevState + 1)
		
		}, 1000) 
        return () => clearInterval(intervalo)
	}, [])
	const seven = Math.floor(counter/1000000);
	const six = Math.floor(counter/100000);
	const five = Math.floor(counter/10000);
	const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
	return (
		<div className="container bg-dark text-light p-4 rounded-3">
			<SecondsCounter digitSeven={seven} digitSix={six} digitFive={five} digitFour={four} digitThree={three} digitTwo={two} digitOne={one}  />
			
			

		</div>
	);
};

export default Home;

