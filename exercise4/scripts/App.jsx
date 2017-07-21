import React from 'react';
import CurrentLocation from './CurrentLocation';
import Map from './Map';
import Search from './Search';
import FavouritesList from './FavouritesList';


export default class App extends React.Component{
	constructor(){
		super();
		var favourites = [];
		if(localStorage.favourites) {
			favourites = JSON.parse(localStorage.favourites);
		}
		this.state = {
			currentAddress:'Anchorage, Manchester',
			favourites:favourites,
			mapCoordinates:{
				lat:53.4744166,
				lng:-2.2861354
			}
			
		}
		
	}
	searchForAddress(address) {
		let self = this;
		GMaps.geocode({
			address: address,
			callback: function(results, status) {
			if(status !== 'OK') {
				self.setState( {
					currentAddress: "Location not found"
				});
				return;
			}
			let latlng = results[0].geometry.location;
			self.setState({
				currentAddress: results[0].formatted_address,
					mapCoordinates: {
						lat: latlng.lat(),
						lng: latlng.lng()
					}
				});
			}
		});
	}
	render(){
		return(
			<div>
			<h1>Your Google Map Locations</h1>
			
			<Search onSearch={this.searchForAddress.bind(this)} />
			
			<Map 
				lat={this.state.mapCoordinates.lat} 
				lng={this.state.mapCoordinates.lng} 
				address={this.state.currentAddress}
			/>
			
			<CurrentLocation 
				address={this.state.currentAddress} 
				favourite={this.isAddressInFavourites(this.state.currentAddress)}
				onFavouriteToggle= {this.favouriteToggle.bind(this)}
			/>
			
			<FavouritesList 
				favouriteLocations={this.state.favourites} 
				activeLocationAddress={this.state.currentAddress} 
				onClick = {this.searchForAddress.bind(this)} 
			/>
			</div>
		);
	}
	isAddressInFavourites(currentAddress){
		let favs = this.state.favourites;
		for(let i =0; i< favs.length;i++){
			if (favs[i].address === currentAddress){
				return true;
			}
		}
		
		return false;
	}
	favouriteToggle(currentAddress){		
		if(this.isAddressInFavourites(currentAddress)){			
			this.rmFavAddress(currentAddress);
		}
		else{			
			this.addFavAddress(currentAddress);
		}
	}
	rmFavAddress(currentAddress){
		let favs = this.state.favourites;
		let index = -1;
		for (let i=0; i<favs.length; i++){
			if (favs[i].address == currentAddress){
				index = i;
				break;
			}
		}
		if (index !== -1){
			favs.splice(index, 1);
			this.setState({favourites: favs});
			localStorage.favourites= JSON.stringify(favs);
		}
	}
	addFavAddress(currentAddress){
		
		let favs = this.state.favourites;
		favs.push({address : currentAddress,timestamp : Date.now()});
		this.setState({favourites: favs});
		localStorage.favourites= JSON.stringify(favs);
	}
	
}