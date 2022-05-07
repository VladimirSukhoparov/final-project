import React from "react";
import './index.css'

import { Link } from 'react-router-dom';
import logo from "../../../public/assets/logo.png";

const Logo = ({className, href, ...props}) => {
	return (
		<Link to='/' className={className? className: "logo"} {...props}>
			<img src={logo} alt="logo" />
		</Link>
	);
};

export default Logo;
