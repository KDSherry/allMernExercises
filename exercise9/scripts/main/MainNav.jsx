import React from 'react';
import {IndexLink,Link} from 'react-router';


export function MainNav(){
	return(
		<nav className = 'top-bar-right' id='menu'>
			<h6 className='hide'>Site Navigation</h6>
			<ul className='vertical-medium-horizontal menu'>
				<li><IndexLink className='pageLink' to='/'>Home</IndexLink></li>
				<li><Link className='pageLink' to='/films'>Films</Link></li>
				<li><Link className='pageLink' to='/actors'>Actors</Link></li>
			</ul>
		</nav>
	);
}