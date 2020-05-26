import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'

import Title from '../../title'

const About = () => {

    const data = useStaticQuery(graphql`
        query AboutQuery {
            allContentfulAbout {
                edges {
                    node {
                        title
                        id
                        content {
                            json
                        }
                    }
                }
            }
        }
    `)

    return (
        <section
            className="section about"
            id="about"
        >
            <Title title="About" triggerElement="#about" />
            <div className="about-area">
                <div className="container">
                    <div className="columns is-multiline">
                        {
                            data.allContentfulAbout.edges.map((edge) => (
                                <div className="column is-4-desktop is-full-tablet card-column" key={edge.node.id}>
                                    <Controller>
                                        <Scene duration={600} triggerElement='.about'>
                                            {
                                                (progress, event) => (
                                                    <Tween
                                                        from={{ opacity: 0, y: "200px" }}
                                                        paused
                                                        playState={
                                                        (event.type === 'enter' && event.scrollDirection === 'FORWARD') ? 'play' : 
                                                        (event.type === 'leave' && event.scrollDirection === 'REVERSE') ? 'reverse' : null}
                                                    >
                                                        <div className="card">
                                                            <header className="card-header">
                                                                <p className="card-header-title">
                                                                    { edge.node.title }
                                                                </p>
                                                            </header>
                                                            <div className="card-content">
                                                                <div className="content">
                                                                    { documentToReactComponents( edge.node.content.json ) }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Tween>
                                                )
                                            }
                                        </Scene>
                                    </Controller>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About