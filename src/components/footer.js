import React from 'react'
// import { FaTwitter, FaGithub, FaMedium } from 'react-icons/fa'
// import { StaticQuery, graphql } from 'gatsby'
import './style.scss'
import { graphql, useStaticQuery } from 'gatsby'
import { FaCodepen, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      allContentfulSocial {
        edges {
          node {
            title
            link
            icon
          }
        }
      }
    }
  `)

  const icons = {
    FaCodepen,
    FaLinkedinIn,
    FaGithub
  }

  const PostIcon = (iconName) => {
    const Icon = icons[iconName]
    return <Icon />
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <div className="content">
              <p>
                Website handcrafted in <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">GatsbyJS</a>, <a href="https://bulma.io/" target="_blank" rel="noopener noreferrer">Bulma</a>, and <a href="https://www.contentful.com/" target="_blank" rel="noopener noreferrer">Contentful</a>.
              </p>
            </div>
          </div>
          <div className="column is-half">
            <div className="level social-icons is-mobile">
              {
                data.allContentfulSocial.edges.map((edge) => (
                  <div className="level-item" key={edge.node.title}>
                    <a
                      href={edge.node.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={edge.node.title}
                    >
                      { PostIcon(edge.node.icon) }
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer
