import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Button, Drawer } from 'antd';

import React from 'react';
import {
	MobileOutlined,
	MailOutlined,
	InstagramOutlined ,
	FacebookOutlined,
	TwitterOutlined ,
	UserOutlined,
	MenuOutlined,
} from '@ant-design/icons';



function AppHeader (){
	
		const [open, setOpen] = useState(false);
		const showDrawer = () => {
			setOpen(true);
		};
		const onClose = () => {
			setOpen(false);
		};
	
	return(
		<div className="container">
			{/* {topbar} */}
			<div className="topBar">
				<div className="contactInfo">
					<ul>
						<li><a href="tel:055-205-55-255"><span><MobileOutlined />055-205-55-255</span></a></li>
						<li><a href="mailto:kobylyan03@gmail.com"><span><MailOutlined />contactone@gmail.com</span></a></li>
					</ul>
				</div>
					<div className='otherInfo'>
						<ul className='socialMedia'>
							<li><a href ="https://www.facebook.com"><FacebookOutlined /></a></li>
							<li><a href ="https://www.twitter.com"><TwitterOutlined /></a></li>
							<li><a href ="https://www.instagram.com"><InstagramOutlined /></a></li>
						</ul>
						<button><UserOutlined /> My Account</button>
					</div>
		</div>
		{/* {Header} */}
		<div className='header separator'>
			<div className='logo'>Grocery</div>
			<div className='mobileVisible'>
			<Button type="primary" onClick={showDrawer}>
			<MenuOutlined />
      </Button>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
			<nav >
				<ul>
					<li><NavLink onClick={onClose} to='home'>Home</NavLink></li>
					<li><NavLink onClick={onClose} to='about'>About</NavLink></li>
					<li><NavLink onClick={onClose} to='shop'>Shop</NavLink></li>
					<li><NavLink onClick={onClose} to='faq'>FAQ</NavLink></li>
					<li><NavLink onClick={onClose} to='contact'>Contact</NavLink></li>
				</ul>
			</nav>
      </Drawer>
			</div>
			<nav className='mobileHidden'>
				<ul>
					<li><NavLink to='home'>Home</NavLink></li>
					<li><NavLink to='about'>About</NavLink></li>
					<li><NavLink to='shop'>Shop</NavLink></li>
					<li><NavLink to='faq'>FAQ</NavLink></li>
					<li><NavLink to='contact'>Contact</NavLink></li>
				</ul>
			</nav>

		</div>
		</div>

	)
};

export default AppHeader;