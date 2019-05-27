import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import '../css/style.css';

class Content extends Component {
	render(){
		const match = this.props.match.params;

		return(
			<h2>{match.title}</h2>
		)
	}
}

class Posts extends Component {
	render(){
		return(
			<div>
				<h1>Posts</h1>
				<Link to="/posts/react" className="link">react</Link>
				<Link to="/posts/redux" className="link">redux</Link>
				<Link to="/posts/store" className="link">store</Link>
				<Route path="/posts/:title" component={Content} />
			</div>
		)
	}
}

export default Posts;
