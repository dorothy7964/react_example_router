import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render(){

    return(
      <div className="header">
    		<NavLink exact to="/" className="item" activeClassName="on">홈</NavLink>
    		<NavLink to="/about/hanpixel" className="item" activeClassName="on">소개</NavLink>
    		<NavLink to="/posts" className="item" activeClassName="on">블로그</NavLink>
    		<NavLink to="/Login" className="item" activeClassName="on">로그인</NavLink>
    		<NavLink to="/Mypage" className="item" activeClassName="on">마이페이지</NavLink>
	   </div>
    )
  }
}

export default Header;
