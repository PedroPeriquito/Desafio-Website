import '../Styles/Navbar.css';

import { useState } from 'react';

const menus = {
	menu1: ['Lorem, ipsum.', 'Lorem, ipsum.', 'Lorem, ipsum.', 'Lorem, ipsum.'],
	menu2: ['Lorem, ipsum.', 'Lorem, ipsum.', 'Lorem, ipsum.', 'Lorem, ipsum.'],
	menu3: ['Lorem, ipsum.', 'Lorem, ipsum.', 'Lorem, ipsum.', 'Lorem, ipsum.'],
	menu4: ['Lorem, ipsum.', 'Lorem, ipsum.', 'Lorem, ipsum.', 'Lorem, ipsum.'],
};

function Navbar() {
	const [menu, setMenu] = useState(null);

	/* Abra ou fecha menus */
	const menuClick = menuKey => {
		setMenu(menu === menuKey ? null : menuKey);
	};

	return (
		<header className='header'>
			<nav className='navbar'>
				<ul className='nav-items'>
					{/* Abre menu de 1 a 4 com base no li clickado */}
					<li className='nav-item' onClick={() => menuClick('menu1')}>
						Lorem, ipsum
						{menu === 'menu1' && (
							<ul className='nav-menu'>
								{menus.menu1.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						)}
					</li>
					<li className='nav-item' onClick={() => menuClick('menu2')}>
						Lorem, ipsum
						{menu === 'menu2' && (
							<ul className='nav-menu'>
								{menus.menu2.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						)}
					</li>
					<li className='nav-item' onClick={() => menuClick('menu3')}>
						Lorem, ipsum
						{menu === 'menu3' && (
							<ul className='nav-menu'>
								{menus.menu3.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						)}
					</li>
					<li className='nav-item' onClick={() => menuClick('menu4')}>
						Lorem, ipsum
						{menu === 'menu4' && (
							<ul className='nav-menu'>
								{menus.menu4.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						)}
					</li>
				</ul>
				<div className='nav-info'>
					<p>Contact us</p>
					<div className='nav-btn'>
						<i className='fa-solid fa-lock'></i>
						<p>Login</p>
					</div>
					<i className='fa-solid fa-magnifying-glass'></i>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
