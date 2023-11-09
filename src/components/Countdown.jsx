import React, { useState, useEffect } from "react";
import "./Countdown.css";

const COUNTDOWN_TARGET = new Date("2023-11-04T16:59:59");

const getTimeLeft = () => {
	const totalTimeLeft = COUNTDOWN_TARGET - new Date();
	const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	const seconds = Math.floor((totalTimeLeft / 1000) % 60);
	if(days<0){
		const days = 0.0;
	const hours = 0.0;
	const minutes = 0.0;
	const seconds = 0.0;
		return {days,hours,minutes,seconds};
	}else{
		return { days, hours, minutes, seconds };	
	}
	
};

const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="flex md:w-full w-4/12 items-center justify-center mx-auto mt-64">
			<div className='countdown'>
			{/* <h2>Countdown</h2> */}
			<div className='content'>
				{Object.entries(timeLeft).map((el) => {
					const label = el[0];
					const value = el[1];
					return (
						<div className='box' key={label}>
							<div className='value'>
								<span>{value}</span>
							</div>
							<span className='label md:scale-150'> {label} </span>
						</div>
					);
				})}
			</div>
		</div>

		</div>
		
	);
};

export default Countdown;
