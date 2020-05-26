import React from 'react';
// import { FaGithub } from 'react-icons/fa';

import { AnchorLink } from 'gatsby-plugin-anchor-links'

import './style.scss';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap'

const Navbar = () => {
	// const [open, setOpen] = useState(false)

	const navItems = [
		{
			title: 'About',
			link: '/#about'
		},
		{
			title: 'Skills',
			link: '/#skills'
		},
		{
			title: 'Projects',
			link: '/#projects'
		},
		{
			title: 'Contact',
			link: '/#contact'
		}
	]

	return (
		<Controller>
			<Scene duration={600} triggerElement="#about">
				{
					(progress, event) => (
						<Tween
							to={{ y: -100 }}
							ease="elastic.out"
							paused
							playState={
								(event.type === 'enter' && event.scrollDirection === 'FORWARD') ? 'play' : 
								(event.type === 'leave' && event.scrollDirection === 'REVERSE') ? 'reverse' : null
							}
						>
							<nav className="menu" id="navbar">
								<ul className="menu-list">
									{
										navItems.map((item) => (
											<li key={item.title}>
												<AnchorLink
													to={item.link}
													key={item.title}
													title={item.title}
												>
													{item.title}
												</AnchorLink>
											</li>
										))
									}
								</ul>
							</nav>
						</Tween>
					)
				}
			</Scene>
		</Controller>
	)
}

export default Navbar;
