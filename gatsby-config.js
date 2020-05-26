require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: 'Behnam Nikkhah | Front-End Developer',
		author: 'Behnam Nikkhah',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'Where Front-End Development is to be treated as a work of art.',
		keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma, CSS3, HTML5, Seo, Starter, Bootstrap, `,
		github: `https://github.com/bnikkhah`,
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: `https://bnikkhah.xyz`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-anchor-links`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
			  spaceId: process.env.CONTENTFUL_SPACE_ID,
			  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
			  fonts: [
				{
				  family: `Montserrat`,
				  variants: [`400`, `500`, `700`]
				},
			  ],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/gatsby-icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
