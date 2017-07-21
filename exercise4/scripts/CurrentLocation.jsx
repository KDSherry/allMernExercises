import React from 'react';

export default class CurrentLocation extends React.Component{
	toggleFavourite(){
		this.props.onFavouriteToggle(this.props.address);
	}
	
	render(){
		let favclassname ='';
		if (this.props.address !== 'Location not found'){
			if(this.props.favourite){
				favclassname = 'glyphicon glyphicon-star';
			}
			else{
				favclassname = 'glyphicon glyphicon-star-empty';
			}
		}
		return(
			<div className='col-xs-12 col-md-6 col-md-offset-3 current-location'>
				<h4 id='save-location'>{this.props.address}</h4>
				<span className={favclassname} onClick ={this.toggleFavourite.bind(this)} aria-hidden = 'true'>
				</span>
			</div>
		);
		
	}
	
}