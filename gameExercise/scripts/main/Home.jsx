import React from 'react';
import {ScoreList} from './ScoreList'
import {IndexLink,Link} from 'react-router';


export default class Home extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className='large-12 small-12 columns'>
				<section>
					<div>
						<header>
							<h2>Reactio-Ware</h2>
						</header>
						<button className='start'><Link to='/CountdownPage'>START!
						</Link>						
						</button>
					
					</div>
					<ScoreList />
				</section>
			</div>
		);
	}
	
}