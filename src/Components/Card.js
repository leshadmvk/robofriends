import React from 'react' //couse we using JSX

const Card = ({name,email,id}) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robopic' src ={`https://robohash.org/test${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;