import React from 'react' //couse we using JSX

const Card = () => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='photo' src ='https://robohash.org/test?200x200'/>
			<div>
				<h2>Jane Doe</h2>
				<p>jane.doe@gmail.com</p>
			</div>
		</div>
	);
}

export default Card;