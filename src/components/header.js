import React from 'react';

import Navbar from './navbar'

import { AnchorLink } from 'gatsby-plugin-anchor-links'

import './style.scss';

import { Tween, SplitLetters } from 'react-gsap'

import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {

	const data = useStaticQuery(graphql`
		query AuthorQuery {
			allContentfulAuthor {
				edges {
					node {
						firstName
						lastName
						role
						id
					}
				}
			},
			file(relativePath: { eq: "mountains.jpg" }) {
				childImageSharp {
					# Specify the image processing specifications right in the query.
					# Makes it trivial to update as your page's design changes.
					fixed(width: 1920) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`)

	return (
		<section className="hero is-dark is-fullheight">
			<div className="overlay"></div>
			<div className="hero-head">
				<Navbar />
			</div>

			<div className="hero-body">
				<div className="container is-fluid">
					<div className="title-wrapper">
						<h1 className="title is-uppercase">
							<Tween from={{ opacity: 0 }} stagger={0.1} duration={2}>
								{
									data.allContentfulAuthor.edges.map((edge) => (
										<SplitLetters
											wrapper={<span />}
											key={edge.node.id}
										>
											{ edge.node.firstName }
										</SplitLetters>
									))
								}
								<br />
								{
									data.allContentfulAuthor.edges.map((edge) => (
										<SplitLetters
											wrapper={<span />}
											key={edge.node.id}
										>
											{ edge.node.lastName }
										</SplitLetters>
									))
								}
							</Tween>
						</h1>
						<Tween from={{ opacity: 0, x: '-200px' }} duration={1.5}>
							{
								data.allContentfulAuthor.edges.map((edge) => (
									<h3 key={edge.node.id} className="subtitle is-uppercase">{ edge.node.role }</h3>
								))
							}
						</Tween>
						<div className="mobile-padding">
							<AnchorLink to="/#projects" className="button is-primary" title="View My Projects">
								View My Projects
							</AnchorLink>
						</div>
					</div>
				</div>
				<AnchorLink to="/#about" title="Scroll Down">
					<div className="icon-scroll"></div>
				</AnchorLink>
			</div>
		</section>
	)
}

export default Header;
