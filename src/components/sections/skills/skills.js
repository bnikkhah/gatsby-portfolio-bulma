import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import { FaReact, FaVuejs, FaWordpressSimple, FaBootstrap, FaGithub, FaHtml5, FaCss3Alt } from 'react-icons/fa'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Title from '../../title'

import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'

const Skills = () => {

    const data = useStaticQuery(graphql`
        query SkillsQuery {
            allContentfulSkill {
                edges {
                    node {
                        icon
                        title
                        brandColor,
                        link,
                        id
                    }
                }
            }
        }
    `)

    const settings = {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        autoplay: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            },
        ]
    };

    const icons = {
        FaWordpressSimple,
        FaBootstrap,
        FaReact,
        FaVuejs,
        FaGithub,
        FaHtml5,
        FaCss3Alt
    }
    
    const PostIcon = (iconName, color, title) => {
        const Icon = icons[iconName]
        return <Icon style={{ color }} title={title} />
    }

    return (
        <section
            className="section skills"
            id="skills"
        >
            <Title title="Skills" triggerElement="#skills" />
            <Controller>
                <Scene duration={600} triggerElement=".skills">
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
                                <div className="skills-area">
                                    <div className="container">
                                        <div className="columns">
                                            <div className="column is-full">
                                                <Slider {...settings}>
                                                    {
                                                        data.allContentfulSkill.edges.map((edge) => (
                                                            <div className="has-text-centered" key={edge.node.id}>
                                                                { PostIcon(edge.node.icon, edge.node.brandColor, edge.node.title) }
                                                                <h3 className="skill-name">{ edge.node.title }</h3>
                                                            </div>
                                                        ))
                                                    }
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tween>
                        )
                    }
                </Scene>
            </Controller>
        </section>
    )
}

export default Skills