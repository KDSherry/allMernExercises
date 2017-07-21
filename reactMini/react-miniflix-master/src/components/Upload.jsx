import React from 'react';

export default class ListingGallery extends React.Compontent{
	let movieListings = [];
	
	render(){
		return(
			<div>
				<Sort />
				<div>
					{movieListings}
				</div>
			</div>	
		);
		
	}
	
	componentWillMount(){
		generatedMovieListings();
	}
	
	generateMovieListings(){
		
		
		for(let i; i<10; i++){
			movieListings[i].push(
				<div style={{backgroundColor:'#00FFFF'}}>
			)
		}
		return movieListings;
	}
}