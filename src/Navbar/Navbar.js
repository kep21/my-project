import React from "react";
import './Navbar.css';
import {  Link } from "react-router-dom";


const Navbar = () => {
	return (
<nav>
	<ul>
		<li><Link to="/imageslider">Home</Link></li>
		<li><Link to="/comments">Comment</Link></li>
		<li><Link to="/Video">Video</Link></li>
		<li><Link to="/audioplayer">Music</Link></li>
	</ul>
</nav>
	)
}

export default Navbar;
