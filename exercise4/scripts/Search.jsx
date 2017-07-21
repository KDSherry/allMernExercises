import React from 'react';
import ReactDOM from 'react-dom';

export default class Search extends React.Component{
	constructor(){
		super();
		this.state = {
			value: ''
		}
	}
	handleSubmit(event){
		event.preventDefault();
		this.props.onSearch(this.state.value);
		ReactDOM.findDOMNode(this).querySelector('input').blur(); 
	}
	handleChange(event){
		this.setState({value: event.target.value});
	}
	render(){
		return(
			<form id='geocoding_form' className='form-horizontal' onSubmit={this.handleSubmit.bind(this)}>
				<div className = 'form-group'>
					<div className = 'col-xs-12 col-md-6 col-md-offset-3'>
						<div className = 'input-group'>
							<input type='text' id='address' 
							className='form-control' 
							placeholder='Find a location...' 
							value = {this.state.value} 
							onChange = {this.handleChange.bind(this)} />
							<span className='input-group-btn'>
								<span className='glyphicon glyphicon-search' aria-hidden = 'true' onClick={this.handleSubmit.bind(this)}></span>
							</span>
						</div>
					</div>
				</div>	
			</form>
		);
	}
}