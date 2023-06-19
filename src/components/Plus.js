import React from 'react';
import '../styles/plus.css';

const Plus = ({ h1, icon, text }) => {
	return (
		<div className='plus'>
			<h1>{h1}</h1>
			<img src={`${process.env.PUBLIC_URL}/images/${icon}`} alt='' />
			<p>{text}</p>
		</div>
	);
};

export default Plus;
