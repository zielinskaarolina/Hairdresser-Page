import React from 'react';
import scissors from '../images/Scissors.png';
import '../styles/aboutMe.css';

const AboutMe = ({ h1, h2, text, img }) => {
	return (
		<div className='aboutMe'>
			<div className='texts'>
				<h1>{h1}</h1>
				<h2>{h2}</h2>
			</div>
			<img src={scissors} alt='' className='icon' />
			<p>{text}</p>
			<img src={`${process.env.PUBLIC_URL}/images/${img}`} alt='' />
		</div>
	);
};

export default AboutMe;
