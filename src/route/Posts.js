import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

class Posts extends Component {
	render(){
		return(
			<div>
				<h1>Posts</h1>
				<Link to="/posts/react" className="link">react</Link>
				<Link to="/posts/redux" className="link">redux</Link>
				<Link to="/posts/store" className="link">store</Link>
			</div>
		)
	}
}

export default Posts;
