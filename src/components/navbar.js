import React from 'react';
// import { FaGithub } from 'react-icons/fa';

import { AnchorLink } from 'gatsby-plugin-anchor-links'

import './style.scss';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap'

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
			<Scene duration={1300}>
				<Timeline
					target={
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
					}
				>
					<Tween from={{ x: 0 }} />
					<Tween to={{ x: 100 }} />
				</Timeline>
			</Scene>
		</Controller>
	)
}

export default Navbar;
