import React, {Component} from 'react';

import Header from './Header';
import Home from './route/Home';
import About from './route/About';
import Posts from './route/Posts';
import Login from './route/Login';
import Mypage from './route/Mypage';
import Error from './route/Error';

class App extends Component {
  render(){
    return(
    	<div>
        <Header />
  			<div className="section">
  					<Home />
  					<About />
  					<Posts />
  					<Login />
  					<Mypage />
  					<Error />
  			</div>
		  </div>
    )
  }
}

export default App;
