import React from 'react'

import Title from '../../title'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useStaticQuery, graphql } from 'gatsby';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Img from 'gatsby-image'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap'

const Projects = () => {

    const data = useStaticQuery(graphql`
        query MyQuery {
            allContentfulProject {
                edges {
                    node {
                        thumbnail {
                            sizes(quality: 100, maxWidth: 1920) {
                                ...GatsbyContentfulSizes_withWebp
                            }
                            id
                        }
                        description {
                            json
                        }
                        link
                        title
                    }
                }
            }
        }
    `)

    const settings = {
        slidesToShow: 1,
        dots: true,
        arrows: false,
        fade: true,
        adaptiveHeight: true
    };

    return (
        <section className="projects" id="projects">
            <Title title="Projects" triggerElement="#projects" />
            <Controller>
                <Scene duration={600} triggerElement="#projects">
                    {
                        (progress, event) => (
                            <Tween
                                from={{ opacity: 0, y: "200px" }}
                                paused
                                playState={
                                    (event.type === 'enter' && event.scrollDirection === 'FORWARD') ? 'play' : 
                                    (event.type === 'leave' && event.scrollDirection === 'REVERSE') ? 'reverse' : null
                                }
                            >
                                <div className="projects-area">
                                    <Slider {...settings}>
                                        {
                                            data.allContentfulProject.edges.map((edge) => (
                                                <div className="project-wrapper" key={edge.node.thumbnail.id}>
                                                    <Img sizes={edge.node.thumbnail.sizes} />
                                                    <div className="project-description">
                                                        <div className="container">
                                                            <div className="columns is-desktop">
                                                                <div className="column is-half-desktop is-offset-6-desktop">
                                                                    <div className="project-description-wrapper">
                                                                        { documentToReactComponents(edge.node.description.json) }
                                                                        <a
                                                                            href={edge.node.link}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="button is-primary project-button"
                                                                            title={`Visit ${edge.node.title}!`}
                                                                        >
                                                                            Visit {edge.node.title}!
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Slider>
                                </div>
                            </Tween>
                        )
                    }
                </Scene>
            </Controller>
        </section>
    )
}

export default Projects