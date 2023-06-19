import Main from './Main';
import Image from './Image';
import Plus from './Plus';
import AboutMe from './AboutMe';
import Prices from './Prices';

import plusData from '../data/plusData';
import aboutMeData from '../data/aboutMeData';

import HairImages1 from '../images/hairs1.png';

function App() {
	const renderedPlus = plusData.map((plus) => {
		return (
			<Plus key={plus.id} h1={plus.h1} icon={plus.icon} text={plus.text} />
		);
	});

	const renderedAboutMe = aboutMeData.map((data) => {
		return <AboutMe key={data.id} h1={data.h1} h2={data.h2} text = {data.text} img={data.img}/>;
	});
	return (
		<div className='app'>
			<Main />
			<Image />
			{renderedPlus}
			<img src={HairImages1} alt='' className='hair-image1' />
			{renderedAboutMe}
			<Prices/>
		</div>
	);
}

export default App;
