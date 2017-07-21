import React from 'react';
import { Link } from 'react-router';
import FilmLinks from './FilmLinks';

export default class Films extends React.Component{
	render(){
		return(
			<div>
				<h3>"When 900 years old, you reach...look as good, you'll not..."</h3>
				<FilmLinks />
				<div>{this.props.children}</div>
			</div>
		);
	}
}