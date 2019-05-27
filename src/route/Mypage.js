import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

const logged = false;

class Mypage extends Component {
	render(){
		return(
			<div>
				{ !logged && <Redirect to='/' /> }
				<h1>Mypage</h1>
			</div>
		)
	}
}

export default Mypage;
