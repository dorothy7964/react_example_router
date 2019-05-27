import React, {Component} from 'react';

class About extends Component {
	render(){
		console.log(this.props.match);
		const match = this.props.match.params;

		return(
			<div>
				<h1>About - {match.user}</h1>
			</div>
		)
	}
}

export default About;
