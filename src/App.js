import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      <Router>
      	<div>
          <Header />
    			<div className="section">
    				<Switch>
    					<Route exact path="/" component={Home} />
    					<Route path="/about/:user" component={About} />
    					<Route path="/posts" component={Posts} />
    					<Route path="/Login" component={Login} />
    					<Route path="/Mypage" component={Mypage} />
    					<Route component={Error} />
    				</Switch>
    			</div>
  		  </div>
      </Router>
    )
  }
}

export default App;
