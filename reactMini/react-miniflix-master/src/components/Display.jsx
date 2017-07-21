import React from 'react';
import {Link} from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import Nav from './Nav';
import { CloudinaryContext, Transformation, Video } from 'cloudinary-react';
import axios from 'axios';

export default class Display extends React.Component{
	constructor(){
		super();
		this.state={
			vids:[]
		}
	}
	getVids(){
		axios.get('http://res.cloudinary.com/unicodeveloper/video/list/miniflix.json')
          .then(res => {
            console.log(res.data.resources);
            this.setState({ vids: res.data.resources});
			
		});
	}
	
	
	componentDidMount() {
		this.getVids();
	}
	render(){
		return(
			<div>
				<Nav />
				<h1 className="text-center">Here be videos</h1>
				<div className="col-sm-12">
					<CloudinaryContext cloudName="unicodeveloper">
						{ this.state.vids.map((data, index) => (
							<div className="col-sm-4" key={index}>
								<div className="embed-responsive embed-responsive-4by3">
									<Video publicId={data.public_id} width="300" height="300"  radius="max" crop="scale" controls>
										
									</Video>
								</div>
								<div> Created at {data.created_at} </div>
							</div>
							))
						}			
					</CloudinaryContext>
				</div>
			</div>
		);
	}
}