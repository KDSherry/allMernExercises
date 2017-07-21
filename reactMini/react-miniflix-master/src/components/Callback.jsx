import React from 'react';
import { setIdToken, setAccessToken } from '../utils/AuthService';

export default class Callback extends React.Component{
	render(){
		return null;
	}
	componentDidMount(){
		setAccessToken();
		setIdToken();
		window.location.href = "/";
		/*this.router.push('/');*/
	}
	
} 