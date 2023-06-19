import React from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import logo from '../images/logo.png';

const Main = () => {
	return (
		<div className='main'>
			<div className='navigation'>
				<FiAlignJustify
					style={{
						fontSize: 30,
                        color: 'grey',
					}}
				/>
			</div>
			<div className='main-view'>
				<img src={logo} alt=''/>
				<div className='text'>
					<h1>Justyna Kempińska</h1>
					<p>FRYZJERNIA</p>
				</div>
			</div>
		</div>
	);
};

export default Main;
