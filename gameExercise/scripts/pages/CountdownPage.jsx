import React from 'react';



export default class CountdownPage extends React.Component{
	render(){
		return(
			<div>
				<header className= 'countdown'>'gameinstructions'</header>
				<div>
					<img  id='3' src='/scripts/pages/3.png' />
					<img  id='2' src='/scripts/pages/2.png' />
					<img  id='1' src='/scripts/pages/1.png' />
				</div>
			</div>
		);
	}
}