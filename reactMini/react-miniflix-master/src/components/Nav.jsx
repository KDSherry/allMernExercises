import React from 'react';
import {Link} from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import '../App.css'

export default class Nav extends React.Component{
	render(){
		return(
			<nav className='navbar navbar-default'>
				<div className="navbar-header"> 
					<Link className="navbar-brand" to="/">Miniflix</Link>
				</div>
				<ul className='nav navbar-nav'>
					<li> 
					<Link to='/' className='link-btn'>All Videos</Link>
					</li>
					
					<li className='nav navbar-nav'>
						{isLoggedIn()?(<Link to='/upload' className='link-btn'>Upload</Link>):''}
					</li>
				</ul>
				<ul className="nav navbar-nav navbar-right">	
					<li >
						{isLoggedIn()?(<button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )}
					</li>			
				</ul>
			</nav>
		);
	}
	
}