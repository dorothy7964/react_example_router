import React, {Component} from 'react';

class Home extends Component {
	movePage = () => {
		console.log(this.props.history);
		this.props.history.push('/about/btn');
	}

	render(){
		return(
			<div>
				<h1>Home</h1>
				<button onClick={this.movePage}>소개페이지로 이동</button>
			</div>
		)
	}
}

export default Home;
