import React, { useState } from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Footer from './footer';

import withLocation from './withLocation'

const Layout = ({ children, search }) => {
	const [alertClose, setAlertClose] = useState(false)
	const { alert } = search

	return (
		<div>
			<Helmet />
			{
				alert === 'show' &&
				<div className="notification is-primary is-marginless is-radiusless" style={{ display: alertClose ? 'none' : 'block' }}>
				<button className="delete" onClick={() => setAlertClose(true)}></button>
					<h3 className="is-size-5 has-text-centered">Thanks for your email! I'll contact you soon! <span role="img" aria-label="Grinning Face With Smiling Eyes

">😁</span></h3>
				</div>
			}
			<Header />
			{ children }
			<Footer />
		</div>
	)
};

export default withLocation(Layout);
