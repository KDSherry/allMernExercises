import React from 'react';

export default class Map extends React.Component{
	//
	render(){
		return(
			<div className='map-overlay'>
				<p>Loading...</p>
				<div id='map'></div>
			</div>
		);
	}
	componentDidMount(){
		this.componentDidUpdate();
		
	}
	componentDidUpdate(){
		let maps = new GMaps({
			el:'#map',
			zoom:12,
			lat:(this.props.lat),
			lng:(this.props.lng)
		});
		maps.addMarker({
			lat:(this.props.lat),
			lng:(this.props.lng),
			title:(this.props.address)
		});
		/*
		maps.addMarker({
			lat:53.4725133,
			lng:-2.2967984,
			title: 'Nearest Pub',
			click: function(e) {alert('This is the nearest pub');}
		});*/
	}
	/*
	addPlace(){
		this.maps.event.addlistener(maps, 'click', function(event){ placeMarker(event.latlng);} ); 
	}
	placeMarker(location){
		this.maps.addMarker(
		
		)
	}*/
}