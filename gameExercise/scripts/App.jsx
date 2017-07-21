import React from 'react';
/*import main from 'main';*/


export default class App extends React.Component{
	render(){
		return(
			<div>
				
				<main className='mainSelector'>{this.props.children}</main>
			</div>
		);
	}
}