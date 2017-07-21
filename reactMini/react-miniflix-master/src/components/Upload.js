import React from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

export default class Upload extends React.Component{
	
	render(){
		return(
			<div>
				<Nav />
				<div className="jumbotron text-center">
					<button onClick={this.uploadWidget} className="btn btn-lg btn-info"> Upload Video</button>
				</div>
			</div>
		);
	}
	
	uploadWidget=()=>{
		window.cloudinary.openUploadWidget(
		{cloud_name:'unicodeveloper',upload_preset:'b9ej8dr5',tags:['miniflix']},
		function(error,result){
			console.log('this is the result of the last upload: ',result);
		});
	}
} 